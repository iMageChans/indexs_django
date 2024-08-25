import {Store} from '@subsquid/typeorm-store'
import {ProcessorContext} from '../processor'
import {ContractAddress} from "../contract";
import * as usdt from '../abi/d9_usdt'
import {Events} from "../utils/event";
import {isContractsCall} from "../utils/tools";
import {SS58, SS58Encode} from "../utils/ss58";
import {TokenTransfers} from "../utils/requests";


export async function handleUSDTEvents(ctx: ProcessorContext<Store>) {
    await USDTTransfer(ctx)
}

async function USDTTransfer(ctx: ProcessorContext<Store>) {

    for await (const block of ctx.blocks) {
        for await (const call of block.calls) {
            if (!isContractsCall(call, ContractAddress.USDT)) {
                continue
            }

            const decodedCall = usdt.decodeMessage(call.args.data)
            console.info(decodedCall)

            if (decodedCall.__kind !== "PSP22_transfer") {
                continue
            }

            let data: Events = {
                block_hash: block.header.hash,
                block_number: block.header.height,
                d9: 0n,
                event_id: call.id,
                extrinsic_hash: call.extrinsic!.hash,
                fee: call.extrinsic?.fee || 0n,
                from_address: SS58Encode(call.origin.value.value),
                timestamp:new Date(block.header.timestamp!),
                to_address: SS58Encode(decodedCall.to),
                usdt: decodedCall.value,
                actions: "USDTTransfer"
            }
            try {
                await TokenTransfers(data)
            }
            catch {

            }
        }
    }
}