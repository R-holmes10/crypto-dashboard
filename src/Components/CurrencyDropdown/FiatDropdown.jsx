import React from 'react'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "../../state/index";


export default function FiatDropdown({handleCurrency}) {
  const dispatch = useDispatch();
  const {updateCurrency} = bindActionCreators(actionCreators,dispatch)

  return (
      <select className='w-full mr-2 h-full text-base xs:text-[1.2rem] px-2 cursor-pointer rounded-md font-semibold font-mono focus:text-blue-500 focus:outline-none' onChange={updateCurrency}>
        <option value="usd" className='text-black'>USD</option>
        <option value="eur" className='text-black'>EUR</option>
        <option value="inr" className='text-black'>INR</option>
      </select>
  )
}

