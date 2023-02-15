import Featured from '../../components/Featured/Featured'
import Footer from '../../components/Footer/Footer'
import Guest from '../../components/Guest/Guest'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import PropertyList from '../../components/propertyList/PropertyList'
import './Homepage.css'

const Homepage = () => {

  return (
    <div>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Homes guests love</h1>
          <Guest/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Homepage