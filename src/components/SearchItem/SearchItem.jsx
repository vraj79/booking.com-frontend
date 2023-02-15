import { useNavigate } from "react-router-dom"
import "./searchItem.css"

const SearchItem = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate("/hotels/1")} className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square200/167225735.webp?k=980aa08933929c99a1571fc1a9f99f108fa353299934778fd1503440ea1dc48d&o=&s=1" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
        <span className="siFeatures">Entire studio . 1 bathroom . 21m² 1 full bed</span>
        <span className="siCancelOp">Free Cancelation</span>
        <span className="siCancelOpSubtitle">You can cancel later,so lock in this great price today !</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <p className="siPrice">Rs 1100</p>
          <p className="siTaxOp">Included taxes and fees</p>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem