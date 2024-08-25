import * as ss58 from '@subsquid/ss58'

export const PREFIX = 9
export const SS58 = ss58.codec(PREFIX)

export function SS58Encode(address: string):string {
    return `${"Dn"}${SS58.encode(address)}`
}