import './hotel.css'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem/SearchItem'

const Hotel = () => {
  const location=useLocation();
  const [destination,setDestination]=useState(location.state.destination)
  const [date,setDate]=useState(location.state.date)
  const [openDate,setOpenDate]=useState(false)
  const [options,setOptions]=useState(location.state.options);
  console.log(location);
  return (
    <div>
      <Header type={"hotel"} />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="hotelSearch">
            <h1 className="hsTitle">Search</h1>
            <div className="hsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="hsItem">
              <label>Check-in-date</label>
              <span onClick={()=>setOpenDate(!openDate)}>
              {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}
              </span>
              {openDate&&<DateRange ranges={date} onChange={(item)=>setDate([item.selection])} minDate={new Date()}/>}
            </div>
            <div className="hsItem">
              <label>Options</label>
              <div className="hsOptions">
                <div className="hsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className='hsOptionInput' />
                </div>
                <div className="hsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className='hsOptionInput' />
                </div>
                <div className="hsOptionItem">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} placeholder={options.adult} className='hsOptionInput' />
                </div>
                <div className="hsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min={0} placeholder={options.children} className='hsOptionInput' />
                </div>
                <div className="hsOptionItem">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input type="number" min={1} placeholder={options.room} className='hsOptionInput' />
                </div>
              </div>  
            </div>
            <button>Search</button>
          </div>
          <div className="hotelResult">
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

export default Hotel