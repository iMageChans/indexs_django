import {Store} from '@subsquid/typeorm-store'
import {ProcessorContext} from '../processor'
import {Events} from "../utils/event";
import {SS58, SS58Encode} from "../utils/ss58";
import { events } from '../types'
import {TokenTransfers} from "../utils/requests";


export async function handleBalancesEvents(ctx: ProcessorContext<Store>) {
    await D9Transfer(ctx)
}

async function D9Transfer(ctx: ProcessorContext<Store>) {

    for await (const block of ctx.blocks) {
        for await (const event of block.events) {
            if (event.name !== events.balances.transfer.name) {
                continue
            }

            let rec: { from: string, to: string, amount: bigint }
            if (events.balances.transfer.v112.is(event)) {
                rec = events.balances.transfer.v112.decode(event)
                let data: Events = {
                    block_hash: block.header.hash,
                    block_number: block.header.height,
                    d9: rec.amount,
                    event_id: event.id,
                    extrinsic_hash: event.extrinsic?.hash || "1",
                    fee: event.extrinsic?.fee || 0n,
                    from_address: SS58Encode(rec.from),
                    timestamp:new Date(event.block.timestamp!),
                    to_address: SS58Encode(rec.to),
                    usdt: 0n,
                    actions: "D9Transfer"
                }
                await TokenTransfers(data)
            }else {
                continue
            }
        }
    }
}