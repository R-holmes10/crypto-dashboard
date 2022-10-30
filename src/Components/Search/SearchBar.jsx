import React from 'react'
import searchIcon from '../../assets/search.png'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../state/index';
import { bindActionCreators } from "redux";


export default function SearchBar({handleSearchValue}) {
const dispatch = useDispatch();
const {filterSearch} = bindActionCreators(actionCreators,dispatch)
    
  return (
    <div className='flex items-center justify-start px-6 space-x-3 bg-white drop-shadow rounded-md '>
              <img src={searchIcon} alt="sdfd" className="w-4 xs:w-5 opacity-50" />

      {/* Search Bar */}
          <form className='w-full'>
            <input
              type="text"
              onChange={filterSearch}
              placeholder="Search by coin"
              className='w-full h-10 outline-none font-medium text-sm xs2:text-base rounded-md'
            />
          </form>
      {/* Search Bar */}
    </div>
  )
}
