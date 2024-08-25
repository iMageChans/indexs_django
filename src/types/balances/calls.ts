import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v112 from '../v112'

export const transferAllowDeath =  {
    name: 'Balances.transfer_allow_death',
    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     */
    v112: new CallType(
        'Balances.transfer_allow_death',
        sts.struct({
            dest: v112.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const setBalanceDeprecated =  {
    name: 'Balances.set_balance_deprecated',
    /**
     * Set the regular balance of a given account; it also takes a reserved balance but this
     * must be the same as the account's current reserved balance.
     * 
     * The dispatch origin for this call is `root`.
     * 
     * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
     */
    v112: new CallType(
        'Balances.set_balance_deprecated',
        sts.struct({
            who: v112.MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        })
    ),
}

export const forceTransfer =  {
    name: 'Balances.force_transfer',
    /**
     * Exactly as `transfer_allow_death`, except the origin must be root and the source account
     * may be specified.
     */
    v112: new CallType(
        'Balances.force_transfer',
        sts.struct({
            source: v112.MultiAddress,
            dest: v112.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const transferKeepAlive =  {
    name: 'Balances.transfer_keep_alive',
    /**
     * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
     * kill the origin account.
     * 
     * 99% of the time you want [`transfer_allow_death`] instead.
     * 
     * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
     */
    v112: new CallType(
        'Balances.transfer_keep_alive',
        sts.struct({
            dest: v112.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const transferAll =  {
    name: 'Balances.transfer_all',
    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true).
     */
    v112: new CallType(
        'Balances.transfer_all',
        sts.struct({
            dest: v112.MultiAddress,
            keepAlive: sts.boolean(),
        })
    ),
}

export const forceUnreserve =  {
    name: 'Balances.force_unreserve',
    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    v112: new CallType(
        'Balances.force_unreserve',
        sts.struct({
            who: v112.MultiAddress,
            amount: sts.bigint(),
        })
    ),
}

export const upgradeAccounts =  {
    name: 'Balances.upgrade_accounts',
    /**
     * Upgrade a specified account.
     * 
     * - `origin`: Must be `Signed`.
     * - `who`: The account to be upgraded.
     * 
     * This will waive the transaction fee if at least all but 10% of the accounts needed to
     * be upgraded. (We let some not have to be upgraded just in order to allow for the
     * possibililty of churn).
     */
    v112: new CallType(
        'Balances.upgrade_accounts',
        sts.struct({
            who: sts.array(() => v112.AccountId32),
        })
    ),
}

export const transfer =  {
    name: 'Balances.transfer',
    /**
     * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
     * 
     * WARNING: DEPRECATED! Will be released in approximately 3 months.
     */
    v112: new CallType(
        'Balances.transfer',
        sts.struct({
            dest: v112.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const forceSetBalance =  {
    name: 'Balances.force_set_balance',
    /**
     * Set the regular balance of a given account.
     * 
     * The dispatch origin for this call is `root`.
     */
    v112: new CallType(
        'Balances.force_set_balance',
        sts.struct({
            who: v112.MultiAddress,
            newFree: sts.bigint(),
        })
    ),
}
