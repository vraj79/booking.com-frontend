import './MailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <div className='mailAgain'>
        <p className="mailTitle">Save time, save money!</p>
        <p className="mailDesc">Sign up and we'll send the best deals to you</p>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email Address" id="" />
            <button>Subscribe</button>
        </div>
        </div>
    </div>
  )
}

export default MailList