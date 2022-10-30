import React from 'react';
import './Coin.css';

const Coin = ({ name, symbol, marketcap, image, priceChange, currencyVal }) => {
    let currencyType;
    if(currencyVal==="usd"){
        currencyType="$";
    }else if(currencyVal==="inr"){
        currencyType="Rs";
    }else if(currencyVal==="eur"){
        currencyType='\u20AC';
    }
    return (
        <div className="hover:scale-105 hover:shadow-xl hover:shadow-blue-100 transition-all duration-200">
            {/* ---Each coin row--- */}
            <div className="flex place-content-between mb-2 lg:mb-[12px] xl:pt-1 border-b-2">
                <div className="px-4 group">
                    {/* ---Each Coin--- */}
                    <div className="coin flex ">
                        <img className='w-4 mr-2 self-center' src={image} alt="crypto" />
                        <h1 className="self-center font-semibold text-sm tracking-widest group-hover:text-blue-600 group-hover:delay-100">
                            {name}
                        </h1>
                        {/* <p>{symbol}</p> */}
                    </div>
                    {/* --- Each Coin--- */}

                    {/* --- Each Market Cap--- */}
                    <div className="xl:pb-1">
                        <p className="text-zinc-400 font-semibold text-[10px] tracking-widest mb-[14px] group-hover:text-blue-600 group-hover:delay-100">
                            Mkt.Cap {currencyType} {marketcap.toLocaleString()}
                        </p>
                        {/* <p className="ml-16 text-transparent">
                            ----------- Empty invisible space ----------
                        </p> */}
                    </div>
                    {/* --- Each Market Cap--- */}
                </div>
                {/* --- Each Price Percent Change--- */}
                <div className="font-semibold tracking-wider text-xs place-items-center mt-[2px] px-4">
                    {priceChange < 0 ? (
                        <p className="text-rose-500">
                            <span className="">&#9660;</span>
                            {priceChange.toFixed(2)} %
                        </p>
                    ) : (
                        <p className="text-emerald-500">
                            <span className="mr-2">&#9650;</span>
                            {priceChange.toFixed(2)} %
                        </p>
                    )}
                </div>
                {/* --- Each Price Percent Change--- */}
            </div>
            {/* ---Each coin row--- */}
        </div>
    );
};

export default Coin;
