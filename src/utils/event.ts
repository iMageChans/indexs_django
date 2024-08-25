

export type Events = {
    event_id: string;
    block_number: number;
    block_hash: string;
    timestamp: Date;
    extrinsic_hash: string;
    from_address: string;
    to_address: string;
    d9: BigInt;
    usdt: BigInt;
    fee: BigInt;
    actions: string;
}