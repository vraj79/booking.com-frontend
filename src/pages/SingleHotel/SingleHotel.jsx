import "./singlehotel.css";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const shPhotos = [
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161730052.jpg?k=785dc5bfbf8b30cdfd86ae6ea0b3fa5796bb3e596185c3e5e671d366b11b4bc7&o=&hp=1",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/121399201.jpg?k=d67f2995adb5579004964cd595765a69fc37ee78cf635980b71666d3491043e2&o=&hp=1",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/121399207.jpg?k=16e7a6131ee3cc1bc92346d473b167d92eb9be1a35172e03db8426b47041e91f&o=&hp=1",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161730064.jpg?k=3eb63d5fd3d374a0558f1fd38f2546a92b60a12307c007ef7cc1ffb02365bac4&o=&hp=1",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/121402222.jpg?k=20556b9e8ddbbe0c34338375f843381a2c4f4c113a6d50d012559f114bdbac56&o=&hp=1",
  },
  {
    src:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/121405394.jpg?k=09a8243579af996fbee9a94b4f6684c95bd288680780132ba16c43e26fcda698&o=&hp=1",
  }
];
const SingleHotel = () => {
  const [slider,setSlider]=useState(0);
  const [open,setOpen]=useState(false);

  const handleSlider=(i)=>{
    setSlider(i);
    setOpen(!open);
  };

  const handleMove=(direction)=>{
    let newNum;
    if(direction==="l"){
      newNum=slider===0?5:slider-1
    }else{
      newNum=slider===5?0:slider+1
    }
    setSlider(newNum)
  }

  return (
    <div>
      <Header type={"hotel"} />
      <div className="shContainer">
        {open && <div className="slider">
          <div className="sliderWrapper">
          <FontAwesomeIcon onClick={()=>setOpen(false)} className="close" icon={faCircleXmark}/>
          <FontAwesomeIcon onClick={()=>handleMove("l")} className="arrow" icon={faCircleArrowLeft}/>
            <img src={shPhotos[slider].src} className="sliderImg" alt="" />
          <FontAwesomeIcon onClick={()=>handleMove("r")} className="arrow" icon={faCircleArrowRight}/>
          </div>
        </div>}
        <div className="shWrapper">
          <button className="bookNow">Reserve or Book Now !</button>
          <h1 className="shTitle">Grand Hotel</h1>
          <div className="shAddress">
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            <span className="shDistance">
              Excellent location - 500 from center
            </span>
          </div>
          <span className="shPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="shImages">
            {shPhotos.map((photo,i) => (
              <div key={i} className="shImgWrapper">
                <img onClick={()=>handleSlider(i)} src={photo.src} alt="" className="shImg" />
              </div>
            ))}
          </div>
          <div className="shDetails">
            <div className="shDetailsTexts">
              <h1 className="shTitle">Stay in the heart of Krakow</h1>
              <p className="shDesc">
                Formerly a home of King George, the 3 Epoques Apartments by
                Prague Residences is the oldest remaining building on the right
                bank of Prague’s Vltava River. The property is located just a
                4-minute walk from the Old Town Square and the Charles Bridge.
                Units at the 3 Epoques Apartments by Prague Residences are
                spacious and feature modern interior design elements. They have
                light colored furnishings and large windows that have views of
                the city center. Also featured are a kitchen with a dining area
                and dishwasher, a bathroom, seating area and a flat-screen TV.
                Wi-Fi is available free of charge and 3 Epoques Apartments by
                Prague Residences also has a meter. The Karlovy lázně tram
                station is 250 m away, and Wenceslas Square can be reached on
                foot in 7 minutes or less. The city’s main train station can be
                reached by public transport in 10 minutes, and airport transfers
                can be arranged upon request.
              </p>
            </div>
            <div className="shDetailsPrice">
              <h3>Property Highlights</h3>
              <p>
                Located in the real heart of Prague, this property has an
                excellent location score of 9.7!
              </p>
              <h2>
                <b>Rs 1100</b>
              </h2>
              <button style={{marginTop:"10px"}}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  );
};

export default SingleHotel;
