import { useEffect, useRef, useState } from 'react'
import { name } from '../../environment/data/about'
import './styles/desktop.css'
import './styles/mobile.css'
import { useSize } from '../../hooks/useSize.jsx'
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
                    <button className={`viewWorkButton ${indexActive == 0 ? 'active' : ''}`}
                    >
                        View my work
                    </button>

                    <div className='viewMyWorkContain'>
                        <img className={`backImage ${indexActive == 0 ? 'active' : ''}`}
                            src={process.env.PUBLIC_URL + "/images/backs/work.jpg"} alt="profile" />
                        <p>
                            Cosas aqui del work
                        </p>
                    </div>
                </Link>

                <div className='viewMyWork'
                    onMouseOver={() => { setIndexActive(1) }}
                    onMouseOut={() => { setIndexActive(-1) }}>

                    <button className={`viewWorkButton ${indexActive == 1 ? 'active' : ''}`}
                    >
                        Chat with me
                    </button>

                    <div className='viewMyWorkContain'>
                        <img className={`backImage ${indexActive == 1 ? 'active' : ''}`}
                            src={process.env.PUBLIC_URL + "/images/backs/work.jpg"} alt="profile" />
                        <p>
                            Cosas aqui del work
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation