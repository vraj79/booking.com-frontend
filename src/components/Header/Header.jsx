import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
import { faBed, faCar, faPerson, faPlane, faStarOfDavid, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Header = ({type}) => {
    const [openDate,setOpenDate]=useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const [openOptions,setOpenOptions]=useState(false);
    const [options,setOptions]=useState({adult:1,children:0,room:1})

    const handleOption=(name,operation)=>{
        setOptions((prev)=>{
            return {
                ...prev,
                [name] : operation==="i" ? options[name]+1:options[name]-1
            }
        })
    }

    const [destination,setDestination]=useState("");
    const navigate=useNavigate();
    
    const [active1,setActive1]=useState(false);
    const [active2,setActive2]=useState(false);
    const [active3,setActive3]=useState(false);

    const api_options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '191cfb01c9mshabc871ac0ebaa17p1b1493jsn024c4f6cba86',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    const [apiData,setApiData]=useState([]);

    const getLocation=()=>{
            fetch("http://localhost:8080/locations")
                .then(response => response.json())
                .then(response => setApiData(response))
                .catch(err => console.error(err));
        };

    // const getLocation=()=>{
    //     fetch('https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=patna', api_options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));
    // };

    useEffect(()=>{
        const id=setTimeout(() => {
            getLocation()
        }, 2000);
        
        return ()=>{
            clearTimeout(id)
        }
    },[destination])

console.log(apiData);

  return (
    <div className='header'>
        <div className={type==="hotel"?"headerContainer hotelMode":"headerContainer"}>
            <div className="headerList">
                <div onClick={()=>navigate('/')} className={`${active1?"headerListItems active":"headerListItems"}`}>
                    <FontAwesomeIcon icon={faBed} /><span>Stays</span>
                </div>
                <div onClick={()=>navigate('/')} className={"headerListItems"}>
                    <FontAwesomeIcon icon={faPlane} /><span>Flights</span>
                </div>
                <div onClick={()=>navigate('/carrentals')} className={`${active2?"headerListItems active":"headerListItems"}`}>
                    <FontAwesomeIcon icon={faCar} /><span>Car Rentals</span>
                </div>
                <div onClick={()=>navigate('/attractions')} className={`${active3?"headerListItems active":"headerListItems"}`}>
                    <FontAwesomeIcon icon={faStarOfDavid} /><span>Attractions</span>
                </div>
                <div onClick={()=>navigate('/')} className={"headerListItems"}>
                    <FontAwesomeIcon icon={faTaxi} /><span>Airport Taxis</span>
                </div>
            </div>
            {type!=="hotel" &&
            <>
                <h1 className="headerTitle">Find your next stay</h1>
                <p className='headerDesc'>Search deals on hotels, homes, and much more...</p>
                {/* <button className="headerBtn">Explore </button> */}
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon style={{marginLeft:"10px"}} icon={faBed} className="headerIcon"/>
                        <input onKeyUp={()=>{}} value={destination} onChange={(e)=>setDestination(e.target.value)} type="text" placeholder='Where are you going ?' className='headerSearchInput'/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                        <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                        {
                        openDate  && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                        />
                        }
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                        {
                            openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult===1} onClick={()=>handleOption("adult","d")} className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button onClick={()=>handleOption("adult","i")} className="optionCounterButton">+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children===0} onClick={()=>handleOption("children","d")} className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button onClick={()=>handleOption("children","i")} className="optionCounterButton">+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button disabled={options.room===1} onClick={()=>handleOption("room","d")} className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button onClick={()=>handleOption("room","i")} className="optionCounterButton">+</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={()=>navigate("/hotels",{state:{destination,date,options}})}>Search</button>
                    </div>
                </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header