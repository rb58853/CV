import './styles/desktop.css'
// import './styles/mobile.css'
function UserMessage({ text }) {
    return (
        <div className="userMessage">
            <text>
                {text}
            </text>
            {/* <div className="line" /> */}
        </div>
    )
}

export default UserMessage