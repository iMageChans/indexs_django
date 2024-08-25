import { Store } from '@subsquid/typeorm-store';
import { ProcessorContext } from '../processor';
import { ContractAddress } from '../contract';
import * as merchant_mining from '../abi/d9_merchant_mining';
import { Events } from '../utils/event';
import { isContractsEvent } from '../utils/tools';
import { SS58Encode } from '../utils/ss58';
import { GreenPointTransfers, TokenTransfers } from '../utils/requests';

type GreenPoints = {
    merchant_points: bigint;
    consumer_points: bigint;
} & Events;

export async function handleMerchantEvents(ctx: ProcessorContext<Store>) {
    await Merchant(ctx);
}

async function Merchant(ctx: ProcessorContext<Store>) {
    for await (const block of ctx.blocks) {
        for await (const event of block.events) {
            if (!isContractsEvent(event, ContractAddress.MERCHANT)) {
                continue;
            }

            const decodedEvent = merchant_mining.decodeEvent(event.args.data);
            console.info(decodedEvent);

            const commonData: Events = {
                block_hash: block.header.hash,
                block_number: block.header.height,
                event_id: event.id,
                extrinsic_hash: event.extrinsic?.hash || '',
                fee: event.extrinsic?.fee || 0n,
                timestamp: new Date(event.block.timestamp!),
                from_address: '',
                to_address: '',
                usdt: 0n,
                d9: 0n,
                actions: '',
            };

            switch (decodedEvent.__kind) {
                case 'SubscriptionExtended':
                    await handleSubscriptionExtended(commonData, decodedEvent);
                    break;

                case 'GreenPointsTransaction':
                    await handleGreenPointsTransaction(commonData, decodedEvent);
                    break;

                case 'D9MerchantPaymentSent':
                    await handleD9MerchantPaymentSent(commonData, decodedEvent);
                    break;

                case 'USDTMerchantPaymentSent':
                    await handleUSDTMerchantPaymentSent(commonData, decodedEvent);
                    break;

                case 'GivePointsUSDT':
                    await handleGivePointsUSDT(commonData, decodedEvent);
                    break;

                default:
                    console.warn('Unhandled event kind:', decodedEvent.__kind);
                    break;
            }
        }
    }
}

async function handleSubscriptionExtended(data: Events, decodedEvent: any) {
    const updatedData = {
        ...data,
        from_address: SS58Encode(decodedEvent.accountId),
        to_address: SS58Encode(ContractAddress.MERCHANT),
        usdt: decodedEvent.usdt,
        actions: 'SubscriptionExtended',
    };
    await TokenTransfers(updatedData);
}

async function handleGreenPointsTransaction(data: Events, decodedEvent: any) {
    const greenPointsData: GreenPoints = {
        ...data,
        from_address: SS58Encode(decodedEvent.merchant.accountId),
        to_address: SS58Encode(decodedEvent.consumer.accountId),
        merchant_points: decodedEvent.merchant.greenPoints,
        consumer_points: decodedEvent.consumer.greenPoints,
        actions: 'GreenPointsTransaction',
    };
    await GreenPointTransfers(greenPointsData);
}

async function handleD9MerchantPaymentSent(data: Events, decodedEvent: any) {
    const updatedData = {
        ...data,
        from_address: SS58Encode(decodedEvent.consumer),
        to_address: SS58Encode(decodedEvent.merchant),
        d9: decodedEvent.amount,
        actions: 'D9MerchantPaymentSent',
    };
    await TokenTransfers(updatedData);
}

async function handleUSDTMerchantPaymentSent(data: Events, decodedEvent: any) {
    const updatedData = {
        ...data,
        from_address: SS58Encode(decodedEvent.consumer),
        to_address: SS58Encode(decodedEvent.merchant),
        usdt: decodedEvent.amount,
        actions: 'USDTMerchantPaymentSent',
    };
    await TokenTransfers(updatedData);
}

async function handleGivePointsUSDT(data: Events, decodedEvent: any) {
    const updatedData = {
        ...data,
        from_address: SS58Encode(decodedEvent.merchant),
        to_address: SS58Encode(ContractAddress.MERCHANT),
        usdt: decodedEvent.amount,
        actions: 'GivePointsUSDT',
    };
    await TokenTransfers(updatedData);
}
