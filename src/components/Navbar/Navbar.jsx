import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span onClick={()=>navigate("/")} className='logo'>Booking.com</span>
            <div className="navItems">
                <button onClick={()=>navigate("/register")} className="navButton">Register</button>
                <button onClick={()=>navigate("/login")} className="navButton">Log in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar