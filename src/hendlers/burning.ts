import {Store} from '@subsquid/typeorm-store'
import {ProcessorContext} from '../processor'
import {ContractAddress} from "../contract";
import * as burn_mining from '../abi/main_pool'
import {Events} from "../utils/event";
import {isContractsEvent} from "../utils/tools";
import {SS58, SS58Encode} from "../utils/ss58";
import {TokenTransfers} from "../utils/requests";


export async function handleBurningEvents(ctx: ProcessorContext<Store>) {
    await Burning(ctx)
}

async function Burning(ctx: ProcessorContext<Store>) {
    for await (const block of ctx.blocks) {
        for await (const event of block.events) {
            if (!isContractsEvent(event, ContractAddress.BURNING)) {
                continue
            }

            const decodedEvent = burn_mining.decodeEvent(event.args.data)
            console.info("Burning", decodedEvent)

            let data: Events;

            switch (decodedEvent.__kind) {
                case "WithdrawalExecuted":
                    data = {
                        block_hash: block.header.hash,
                        block_number: block.header.height,
                        d9: decodedEvent.amount,
                        event_id: event.id,
                        extrinsic_hash: event.extrinsic!.hash,
                        fee: event.extrinsic?.fee || 0n,
                        from_address: SS58Encode(ContractAddress.BURNING),
                        timestamp: new Date(event.block.timestamp!),
                        to_address: SS58Encode(decodedEvent.from),
                        usdt: 0n,
                        actions: "WithdrawalExecuted"
                    }
                case "BurnExecuted":
                    data = {
                        block_hash: block.header.hash,
                        block_number: block.header.height,
                        d9: decodedEvent.amount,
                        event_id: event.id,
                        extrinsic_hash: event.extrinsic!.hash,
                        fee: event.extrinsic?.fee || 0n,
                        from_address: SS58Encode(decodedEvent.from),
                        timestamp: new Date(event.block.timestamp!),
                        to_address: SS58Encode(ContractAddress.BURNING),
                        usdt: 0n,
                        actions: "BurnExecuted"
                    }
            }
            await TokenTransfers(data)
        }
    }
}