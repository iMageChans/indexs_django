import {Store} from '@subsquid/typeorm-store'
import {ProcessorContext} from '../processor'
import {ContractAddress} from "../contract";
import * as amm from '../abi/market_maker'
import {Events} from "../utils/event";
import {isContractsEvent} from "../utils/tools";
import {SS58, SS58Encode} from "../utils/ss58";
import {SwapTransfers, TokenTransfers} from "../utils/requests";


export async function handleMarketMakerEvents(ctx: ProcessorContext<Store>) {
    await MarketMaker(ctx)
}

async function MarketMaker(ctx: ProcessorContext<Store>){
    for await (const block of ctx.blocks) {
        for await (const event of block.events) {
            if (!isContractsEvent(event, ContractAddress.AMM)) {
                continue
            }
            const decodedEvent = amm.decodeEvent(event.args.data)
            console.info("MarketMaker", decodedEvent)
            let data: Events;

            let from_address: string
            let to_address: string

            if (decodedEvent.accountId === ContractAddress.AMM) {
                from_address = ContractAddress.AMM
                to_address = decodedEvent.accountId
            } else {
                from_address = decodedEvent.accountId
                to_address = ContractAddress.AMM
            }

            switch (decodedEvent.__kind) {
                case "LiquidityAdded":
                    data = {
                        block_hash: block.header.hash,
                        block_number: block.header.height,
                        timestamp: new Date(event.block.timestamp!),
                        event_id: event.id,
                        extrinsic_hash: event.extrinsic?.hash || "",
                        fee: event.extrinsic?.fee || 0n,
                        from_address: SS58Encode(decodedEvent.accountId),
                        to_address: SS58Encode(ContractAddress.AMM),
                        usdt: decodedEvent.usdt,
                        d9: decodedEvent.d9,
                        actions: "LiquidityAdded"
                    }
                    await TokenTransfers(data)
                    break
                case "LiquidityRemoved":
                    data = {
                        block_hash: block.header.hash,
                        block_number: block.header.height,
                        d9: decodedEvent.d9,
                        event_id: event.id,
                        extrinsic_hash: event.extrinsic?.hash || "",
                        fee: event.extrinsic?.fee || 0n,
                        from_address: SS58Encode(ContractAddress.AMM),
                        timestamp: new Date(event.block.timestamp!),
                        to_address: SS58Encode(decodedEvent.accountId),
                        usdt: decodedEvent.usdt,
                        actions: "LiquidityRemoved"
                    }
                    await TokenTransfers(data)
                    break
                case "D9ToUSDTConversion":
                    data = {
                        block_hash: block.header.hash,
                        block_number: block.header.height,
                        d9: decodedEvent.d9,
                        event_id: event.id,
                        extrinsic_hash: event.extrinsic?.hash || "",
                        fee: event.extrinsic?.fee || 0n,
                        from_address: SS58Encode(from_address),
                        timestamp: new Date(event.block.timestamp!),
                        to_address: SS58Encode(to_address),
                        usdt: decodedEvent.usdt,
                        actions: "D9ToUSDTConversion"
                    }
                    await TokenTransfers(data)
                    await SwapTransfers(data)
                    break
                case "USDTToD9Conversion":
                    data = {
                        block_hash: block.header.hash,
                        block_number: block.header.height,
                        d9: decodedEvent.d9,
                        event_id: event.id,
                        extrinsic_hash: event.extrinsic?.hash || "",
                        fee: event.extrinsic?.fee || 0n,
                        from_address: SS58Encode(from_address),
                        timestamp: new Date(event.block.timestamp!),
                        to_address: SS58Encode(to_address),
                        usdt: decodedEvent.usdt,
                        actions: "USDTToD9Conversion"
                    }
                    await TokenTransfers(data)
                    await SwapTransfers(data)
                    break
            }
        }
    }
}