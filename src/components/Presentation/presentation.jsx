import { name } from '../../data/about'
import './styles/desktop.css'
import './styles/mobile.css'
function EnglishPresentation() {
    return (
        <section className="presentation">
            <text>
                {`Hello, I'm `}
                <text className='nameText'>
                    {name}
                </text>
                .
            </text>
            <text>
                {`I'm a Computer Scientist.`}
            </text>
            
            <button className='viewWorkButton'>
                View my work
            </button>

        </section>
    )
}

export default EnglishPresentation