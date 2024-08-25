import {Store} from '@subsquid/typeorm-store'
import {ProcessorContext} from '../processor'
import {ContractAddress} from "../contract";
import * as merchant_mining from '../abi/d9_merchant_mining'
import {Events} from "../utils/event";
import {isContractsEvent} from "../utils/tools";
import {SS58, SS58Encode} from "../utils/ss58";
import {GreenPointTransfers, TokenTransfers} from "../utils/requests";


type green_points = {
    merchant_points: BigInt
    consumer_points: BigInt
} & Events


export async function handleMerchantEvents(ctx: ProcessorContext<Store>) {
    // await SubscriptionExtended(ctx)
    // await D9Redeemed(ctx)
    // await GreenPointsTransaction(ctx)
    // await D9MerchantPaymentSent(ctx)
    // await USDTMerchantPaymentSent(ctx)
    // await GivePointsUSDT(ctx)
    await Merchant(ctx)
}

async function Merchant(ctx: ProcessorContext<Store>) {

    for await (const block of ctx.blocks) {
        for await (const event of block.events) {
            if (!isContractsEvent(event, ContractAddress.MERCHANT)) {
                continue
            }

            const decodedEvent = merchant_mining.decodeEvent(event.args.data)
            console.info(decodedEvent)
            let data: Events;

            if (decodedEvent.__kind === "SubscriptionExtended") {
                data = {
                    block_hash: block.header.hash,
                    block_number: block.header.height,
                    d9: 0n,
                    event_id: event.id,
                    extrinsic_hash: event.extrinsic!.hash,
                    fee: event.extrinsic?.fee || 0n,
                    from_address: SS58Encode(decodedEvent.accountId),
                    timestamp: new Date(event.block.timestamp!),
                    to_address: SS58Encode(ContractAddress.MERCHANT),
                    usdt: decodedEvent.usdt,
                    actions: "SubscriptionExtended"
                }
                await TokenTransfers(data)
            } else if (decodedEvent.__kind === "GreenPointsTransaction") {
                let Gdata: green_points = {
                    block_hash: block.header.hash,
                    block_number: block.header.height,
                    d9: 0n,
                    event_id: event.id,
                    extrinsic_hash: event.extrinsic!.hash,
                    fee: event.extrinsic?.fee || 0n,
                    from_address: SS58Encode(decodedEvent.merchant.accountId),
                    timestamp: new Date(event.block.timestamp!),
                    to_address: SS58Encode(decodedEvent.consumer.accountId),
                    usdt: 0n,
                    merchant_points: decodedEvent.merchant.greenPoints,
                    consumer_points: decodedEvent.consumer.greenPoints,
                    actions: "GreenPointsTransaction"
                }
                await GreenPointTransfers(Gdata)
            } else if (decodedEvent.__kind === "D9MerchantPaymentSent") {
                data = {
                    block_hash: block.header.hash,
                    block_number: block.header.height,
                    d9: decodedEvent.amount,
                    event_id: event.id,
                    extrinsic_hash: event.extrinsic!.hash,
                    fee: event.extrinsic?.fee || 0n,
                    from_address: SS58Encode(decodedEvent.consumer),
                    timestamp: new Date(event.block.timestamp!),
                    to_address: SS58Encode(decodedEvent.merchant),
                    usdt: 0n,
                    actions: "D9MerchantPaymentSent"
                }
                await TokenTransfers(data)
            } else if (decodedEvent.__kind === "USDTMerchantPaymentSent") {
                data = {
                    block_hash: block.header.hash,
                    block_number: block.header.height,
                    d9: 0n,
                    event_id: event.id,
                    extrinsic_hash: event.extrinsic!.hash,
                    fee: event.extrinsic?.fee || 0n,
                    from_address: SS58Encode(decodedEvent.consumer),
                    timestamp: new Date(event.block.timestamp!),
                    to_address: SS58Encode(decodedEvent.merchant),
                    usdt: decodedEvent.amount,
                    actions: "USDTMerchantPaymentSent"
                }
                await TokenTransfers(data)
            } else if (decodedEvent.__kind === "GivePointsUSDT") {
                data = {
                    block_hash: block.header.hash,
                    block_number: block.header.height,
                    d9: 0n,
                    event_id: event.id,
                    extrinsic_hash: event.extrinsic!.hash,
                    fee: event.extrinsic?.fee || 0n,
                    from_address: SS58Encode(decodedEvent.merchant),
                    timestamp: new Date(event.block.timestamp!),
                    to_address: SS58Encode(ContractAddress.MERCHANT),
                    usdt: decodedEvent.amount,
                    actions: "GivePointsUSDT"
                }
                await TokenTransfers(data)
            }
        }
    }
}