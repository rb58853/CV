import './styles/desktop.css'
function WaitMessage() {
    return (
        <div className="waitMessage">
            <img className='waitMessageFloat' src={process.env.PUBLIC_URL+ "/gifs/message.gif"} alt="connecting" />
        </div>
    )
}

export default WaitMessage