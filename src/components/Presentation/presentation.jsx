import { useRef, useState } from 'react'
import { name } from '../../environment/data/about'
import './styles/desktop.css'
import './styles/mobile.css'
import { Link } from 'react-router-dom'

function Presentation({ app }) {
    const presentationRef = useRef()
    // const size = useSize(presentationRef)
    const [indexActive, setIndexActive] = useState(-1)

    return (
        <section className="presentation"
            ref={presentationRef}
        >
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

            <div className='selectSpace'>
                <Link to='/projects' className='viewMyWork' onMouseOver={() => { setIndexActive(0) }}
                    onMouseOut={() => { setIndexActive(-1) }}
                >
                    <button className={`viewWorkButton ${indexActive === 0 ? 'active' : ''}`}
                    >
                        View my work
                    </button>

                    <div className='viewMyWorkContain'>
                        <img className={`backImage ${indexActive === 0 ? 'active' : ''}`}
                            src={process.env.PUBLIC_URL + "/images/backs/work.jpg"} alt="profile" />
                        <p>
                            Designed space to offer you an integrated vision of my practical experience and technical skills, evidenced in real projects executed both during my studies and in work environments.
                        </p>
                    </div>
                </Link>

                <div className='viewMyWork'
                    onMouseOver={() => { setIndexActive(1) }}
                    onMouseOut={() => { setIndexActive(-1) }}>

                    <button className={`viewWorkButton ${indexActive === 1 ? 'active' : ''}`}
                    >
                        Chat with me
                    </button>

                    <div className='viewMyWorkContain'>
                        <img className={`backImage ${indexActive === 1 ? 'active' : ''}`}
                            src={process.env.PUBLIC_URL + "/images/backs/chat.jpg"} alt="profile" />
                        <p>
                            <b>VPS MISSED ONLINE (IN PROCESS)</b>
                            <p>
                                Space to interact with my Natural Language Processing AI, designed to provide you with answers about my information, projects, or skills based on your messages. This chat facilitates smooth and direct communication with the AI, allowing you to establish an interactive and effective conversation "with me".
                            </p>

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation