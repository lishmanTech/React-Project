import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, Save money</h1>
        <span className="mailDesc">Sign up to get the best deals</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe here</button>
        </div>
    </div>
  )
}

export default MailList