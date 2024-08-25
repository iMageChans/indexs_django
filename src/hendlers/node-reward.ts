import {Store} from '@subsquid/typeorm-store'
import {ProcessorContext} from '../processor'
import {ContractAddress} from "../contract";
import * as node_reward from '../abi/node_reward'
import {Events} from "../utils/event";
import {isContractsEvent} from "../utils/tools";
import {SS58, SS58Encode} from "../utils/ss58";


export async function handleNodeRewardEvents(ctx: ProcessorContext<Store>) {
    await NodeRewardPaid(ctx)
}

async function NodeRewardPaid(ctx: ProcessorContext<Store>) {

    for await (const block of ctx.blocks) {
        for await (const event of block.events) {
            if (!isContractsEvent(event, ContractAddress.NODE_REWARD)) {
                continue
            }

            const decodedEvent = node_reward.decodeEvent(event.args.data)
            console.info(decodedEvent)

            if (decodedEvent.__kind !== "NodeRewardPaid") {
                continue
            }

            let data: Events = {
                block_hash: block.header.hash,
                block_number: block.header.height,
                d9: decodedEvent.amount,
                event_id: event.id,
                extrinsic_hash: event.extrinsic!.hash,
                fee: event.extrinsic?.fee || 0n,
                from_address: SS58Encode(ContractAddress.MERCHANT),
                timestamp: new Date(event.block.timestamp!),
                to_address: SS58Encode(decodedEvent.receiver),
                usdt: 0n,
                actions: "NodeRewardPaid"
            }
            return data
        }
    }
}