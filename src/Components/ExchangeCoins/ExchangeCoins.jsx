import React from "react";
import { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
// import { Popup} from 'semantic-ui-react'
import 'reactjs-popup/dist/index.css';
// import ReactTooltip from "react-tooltip";
import Axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
function ExchangeCoins() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  
    const regMatch = /[a-zA-Z]+/;
    // const [text,setText]=useState("");
    const [isError,setError]=useState(false);
    const [isString,setisString]=useState(false);
    const handleInput=(e)=>{
      setError(false);
      setisString(false);
      convert();
      //console.log(e.target.value);
      setInput(e.target.value)
      if(e.target.value <= 0 )
        {
         
          setError(true);
       
        }
      else if(regMatch.test(e.target.value))
        {
           setisString(true);
        }
      else if(e.target.value > 0){
          //e.preventDefault();
          convert();
          }
    }
  //
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);
  
  function convert() {
    var rate = info[to];
    if(input >= 0)
    setOutput(input * rate);
  }

  return (
    <div className="w-full px-4 xl:px-6 dark:bg-gray-700 dark:text-white">
      {/* --- Div 1: Exchange Coins Text --- */}
      <div className="font-bold font-mono pt-2 text-zinc-700 text-lg xl:text-2xl xl:pb-2 xl:pt-4 dark:text-white">
        <h1>Exchange Coins</h1>
      </div>
      {/* --- Div 1: Exchange Coins Text --- */}
      <div className="flex place-content-between xl:place-content-stretch dark:bg-gray-700">
        <div className="flex dark:bg-gray-700">
          {/* --- Div 2: Buy & Sell Text --- */}
          <div className="space-y-4 xl:space-y-[30px] mt-[28px] pr-4 xl:text-lg dark:bg-gray-700">
            <h1 className="text-rose-500 font-medium">Sell</h1>
            <h1 className="text-teal-500 font-medium">Buy</h1>
          </div>
          {/* --- Div 2: Buy & Sell Text --- */}
          {/* --- Div 3: Buy & Sell Dropdown --- */}
          <div className="mt-4 xl:space-y-4 xl:mt-[20px] dark:bg-gray-700">
            <Dropdown
              className="uppercase xl:w-40 font dark:bg-gray-700"
              menuClassName="h-28"
              options={options}
              onChange={(e) => {
                setFrom(e.value);
              }}
              value={from}
              placeholder="From"
            />
            <Dropdown
              className="w-24 uppercase xl:w-40 dark:bg-gray-700 dark:text-white"
              menuClassName="h-[5.5rem]"
              options={options}
              onChange={(e) => {
                setTo(e.value);
              }}
              value={to}
              placeholder="To"
            />
          </div>
          {/* --- Div 3: Buy & Sell Dropdown --- */}
        </div>
        {/* --- Div 4: Buy & Sell Amount --- */}
        <div className="mt-4 xl:mt-5 space-y-1 xl:space-y-3 xl:pl-6 flex flex-col dark:bg-gray-700">
          <input
            type="text" 
            className={`border ${(isError||isString) && "focus:border-red-500 focus:ring-red-500 border-red-500"} rounded-md h-10 text-slate-400 w-24 xl:w-36 focus:outline-none px-2 py-2 dark:text-white`}
            //  className={`border${setError(true)} || ${setisString(true)} " focus:border-red-500 focus:ring-red-500 border-red-500" `}
           
            placeholder="Enter Value"
            value={input}
            onChange={handleInput}
          />
          <div>
       
          <p 
          className=
          "dark:bg-gray-700 text-sm"
            >
            {
            isError ? 
          
               <Popup trigger={<button className=" bg-black rounded-full text-xs font-bold text-white px-1.5 py-0.2">i</button>}
               position="bottom"
               on='hover'
               repositionOnResize='true'>
                <div className=" text-xs text-black ">Zero or Negative number is not a valid input!</div>

               </Popup>
           : null
            || isString ? 
            <Popup trigger={<button className=" bg-black rounded-full text-xs font-bold text-white px-1.5 py-0.2">i</button>}
            position="bottom"
            on='hover'
            repositionOnResize='true'>
             <div className="  text-xs text-black ">The string is not a valid input</div>

            </Popup>
   
            : null 
          }
          </p>
          </div>
          
          <div className="text-sm">
         
          <p className="px-[10px] py-0.8 xl:pt-4 text-sm xl:w-36 text-teal-500 font-medium">
                        {output.toFixed(3) + ' ' + to.toUpperCase()}
          </p>
          
          
          </div>
        </div>
        
      </div>
      <div className="flex justify-center xl:mt-3 dark:text-white">
       <button
          type="button"
          className="bg-blue-400 text-sm px-2 py-1 sm:px-4 text-white rounded-md xl:px-6 xl:py-1 mt-3 transition duration-300 hover:bg-blue-500 focus:outline-none focus:shadow-outline dark:bg-blue-400"
          onClick={(e) => {
            handleInput();
          }} 
        >
          Exchange
        </button>
           
      </div>
</div>
  );
}

export default ExchangeCoins;
