import React from 'react';
import CoinList from './CoinList';

function MARKET_ENDPOINT({currency,search}) {
    return (
        <div className="h-[51.4rem] lg:h-[47.3rem] xl:h-[51.4rem]">
            <CoinList currency={currency} search={search}/>
        </div>
    )
}

export default MARKET_ENDPOINT;

