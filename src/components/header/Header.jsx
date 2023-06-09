import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import "./header.css" ;
// import {DateRange} from 'react-date-range'
// import {format} from "date-fns";

const Header = ({type}) => {
  // const[Date,setDate]=useS  tate([
  //   {
  //     startDate:new Date(),
  //     endDate:null,
  //     key:'selection',
  //   },
  // ]);
  // const  [openDate,setopenDate]=useState(false);
  const [openOptions,setOPenOption]=useState(false);
  const [options,setOPtions]=useState({
    adult:1,
    children:0,
    room:1,
  });

  const handleoption =(name,operation)=>{
      setOPtions(prev=>{return{
        ...prev,[name]:operation === "i"?options[name ]+1:options[name]-1.
      
      };
    }
    )}
  
  return (
    <div className="header">
      <div className={type ==="list" ? "headerContainer listMode" : "headerContainer "}>
        <div className="headerList">
            <div className="headerListItem active">
                 <FontAwesomeIcon icon={faBed}/>
                  <span>Stays</span>
            </div>
            <div className="headerListItem">
                 <FontAwesomeIcon icon={faPlane}/>
                  <span>Flights</span>
            </div>
            <div className="headerListItem">
                 <FontAwesomeIcon icon={faCar}/>
                  <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              
                 <FontAwesomeIcon icon={faBed}/>
                  <span>Attraction</span>
            </div><div className="headerListItem">
                 <FontAwesomeIcon icon={faTaxi}/>
                  <span>Airport taxis</span>
            </div>
         </div>
         { type !=="list" &&
          <>
          <h1 className="headerTitle">A Lifetime of discounts? It's Genius</h1>
         <p className="headerDesc">
          Get rewarded foryour travels-unlock instant savings of 10% or more 
          with a free Ytech account

        </p>
        <button className="headerBtn">Sign in/Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon"/>
          <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          {/* <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd,yyy")} to${format(date[0].endDate,"MM/dd,yyy")} `}</span> */}
          {/* { <DateRange 
            editablleDateInput={true} 
            onchange={(item)=>setDate([item,Selection])} 
            moveRangeOnFirstSelection={false}
            ranges={date} 
            className="date "  
          />} */}
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
          <span onClick={()=>setOPenOption(!openOptions)} className="headerSearchText">{`${options.adult } adult . ${options.children } children . ${options.room } room .`}</span>
          { openOptions && <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                 <button className="optionCounterButton" onClick={()=> handleoption("adult","d")}>-</button> 
                 <span className="optionCounternumber">{options.adult}</span>
                 <button className="optionCounterButton" onClick={()=> handleoption("adult","i")}>+</button>
            </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
                 <button className="optionCounterButton" onClick={()=> handleoption("room","d")}>-</button>
                 <span className="optionCounternumber">{options.children}</span>
                 <button className="optionCounterButton" onClick={()=> handleoption("room","i")}>+</button>
              </div>
            </div> 
            <div className="optionItem">
              <span className="optionText">Rooms</span>
              <div className="optionCounter">
                 <button className="optionCounterButton" onClick={()=> handleoption("room","d")}
                   disabled={options.room<=1}>-</button>
                 <span className="optionCounternumber">{options.room}</span>
                 <button className="optionCounterButton" onClick={()=> handleoption("room","i")}>+</button>
              </div>
            </div> 
          </div>}
          </div>
          <div className="headerSearchItem"> 
          <button className="headerBtn">Search</button>
          </div>
          
        </div></>}
        </div>
    </div>
  )
}

export default Header