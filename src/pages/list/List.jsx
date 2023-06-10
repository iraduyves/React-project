import React, { useState } from 'react'
import "./List.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import SearchItem from '../../components/SearchItem/SearchItem'

const List = () => {

  const location =useLocation()
  const[destination,SetDestination]=useState(location.state.destination)
  const[date,SetDate]=useState(location.state.Date)
  const[openDate,SetopenDate]=useState(false)
  const[options,SetOptions]=useState(location.state.options)

  return (
    <div>
    <Navbar/> 
    <Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input type="text" placeholder={destination}/>
          </div>
          <div className="lsItem">
            <label>Check-in Date</label>
            {/* <span onclick={()=>setopenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd,yyy")} to${format(date[0].endDate,"MM/dd,yyy")} `}</span> */}
            {/* { openDate && (<DateRange onchange={(item)=>SetDate([item.selection])}
            minDate={newDate()}
            ranges={date} />)} */}
          </div>
          <div className="lsItem">
            <label >OPtions</label>
            <div className="lsOPtions">

            <div className="lsOptionItem">
              <span className="lsOptionText">
                Min price <small>per night</small>
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Max price <small>per night</small>
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Adult 
              </span>
              <input type="number" min={1} className="lsOptionInput"  placeholder={options.adult}/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                Children 
              </span>
              <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">
               Rooms 
              </span>
              <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
            </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className="listResult">
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </div>
      </div>
    </div>
    </div> 
  ) 
}

export default List