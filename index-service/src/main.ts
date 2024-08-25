
import {Store, TypeormDatabase} from '@subsquid/typeorm-store'

import {handleBalancesEvents} from './hendlers/balances'
import {handleUSDTEvents} from './hendlers/usdt'
import {handleMarketMakerEvents} from './hendlers/market-maker'
import {handleMerchantEvents} from './hendlers/merchant'

import {
    processor,
} from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async ctx => {

    await handleBalancesEvents(ctx)
    await handleUSDTEvents(ctx)
    await handleMarketMakerEvents(ctx)
    await handleMerchantEvents(ctx)
})


