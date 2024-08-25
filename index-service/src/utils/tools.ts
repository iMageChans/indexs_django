export function isContractsEvent(event: { name: string, args: { contract: string } }, address: string) {
    return event.name === 'Contracts.ContractEmitted' && event.args.contract === address
}

export function isContractsCall(call: { name: string, args: { dest: { value: string } } }, address: string) {
    return call.name === 'Contracts.call' && call.args.dest.value === address
}