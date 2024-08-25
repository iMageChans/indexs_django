import * as ss58 from '@subsquid/ss58'
import  {ContractAddress} from "./contract";
import {
    BlockHeader,
    DataHandlerContext,
    SubstrateBatchProcessor,
    SubstrateBatchProcessorFields,
    Event as _Event,
    Call as _Call,
    Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'


export const processor = new SubstrateBatchProcessor()
    .setRpcEndpoint({
        url: 'wss://archiver.d9network.com:40300',
        rateLimit: 0,
        maxBatchCallSize: 500,
    })
    .addEvent({
        name: [
            'Balances.Transfer',
        ],
        extrinsic: true,
        call: true,
        stack: true,
    })
    .addCall({
        extrinsic: true,
        events: true,
        stack: true,
    })
    .addContractsContractEmitted({
        contractAddress: [
            ContractAddress.CROSS_CHAIN,
            ContractAddress.AMM,
            ContractAddress.NODE_REWARD,
            ContractAddress.USDT,
            ContractAddress.BURNING,
            ContractAddress.MERCHANT
        ],
        extrinsic: true,
        call: true,
        stack: true,
    })
    .setFields({
        event: {
            phase: true,
            args: true,
            name: true,
        },
        extrinsic: {
            hash: true,
            fee: true,
            success: true,
            error: true,
        },
        block: {
            timestamp: true,
        },
        call: {
            name: true,
            args: true,
            origin: true,
        },
    })
    .setBlockRange({
        from: 2500000,
        // to: 3036151
    })

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
