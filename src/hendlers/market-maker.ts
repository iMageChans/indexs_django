import { Store } from '@subsquid/typeorm-store';
import { ProcessorContext } from '../processor';
import { ContractAddress } from '../contract';
import * as amm from '../abi/market_maker';
import { Events } from '../utils/event';
import { isContractsEvent } from '../utils/tools';
import { SS58Encode } from '../utils/ss58';
import { SwapTransfers, TokenTransfers } from '../utils/requests';

export async function handleMarketMakerEvents(ctx: ProcessorContext<Store>) {
    await MarketMaker(ctx);
}

async function MarketMaker(ctx: ProcessorContext<Store>) {
    for await (const block of ctx.blocks) {
        for await (const event of block.events) {
            if (!isContractsEvent(event, ContractAddress.AMM)) {
                continue;
            }

            const decodedEvent = amm.decodeEvent(event.args.data);
            console.info("MarketMaker", decodedEvent);

            const commonData = {
                block_hash: block.header.hash,
                block_number: block.header.height,
                event_id: event.id,
                extrinsic_hash: event.extrinsic?.hash || '',
                fee: event.extrinsic?.fee || 0n,
                timestamp: new Date(event.block.timestamp!),
                from_address: SS58Encode(
                    decodedEvent.accountId === ContractAddress.AMM
                        ? ContractAddress.AMM
                        : decodedEvent.accountId
                ),
                to_address: SS58Encode(
                    decodedEvent.accountId === ContractAddress.AMM
                        ? decodedEvent.accountId
                        : ContractAddress.AMM
                )
            };

            let data: Events;

            switch (decodedEvent.__kind) {
                case 'LiquidityAdded':
                    data = {
                        ...commonData,
                        usdt: decodedEvent.usdt,
                        d9: decodedEvent.d9,
                        actions: 'LiquidityAdded'
                    };
                    await TokenTransfers(data);
                    break;

                case 'LiquidityRemoved':
                    data = {
                        ...commonData,
                        usdt: decodedEvent.usdt,
                        d9: decodedEvent.d9,
                        actions: 'LiquidityRemoved'
                    };
                    await TokenTransfers(data);
                    break;

                case 'D9ToUSDTConversion':
                case 'USDTToD9Conversion':
                    data = {
                        ...commonData,
                        usdt: decodedEvent.usdt,
                        d9: decodedEvent.d9,
                        actions: decodedEvent.__kind
                    };
                    await TokenTransfers(data);
                    await SwapTransfers(data);
                    break;

                default:
                    break;
            }
        }
    }
}
