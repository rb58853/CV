import { useEffect, useRef, useState } from 'react'
import { name } from '../../environment/data/about'
import './styles/desktop.css'
import './styles/mobile.css'
import {useSize} from '../../hooks/useSize.jsx'

function Presentation({ app }) {
    const presentationRef = useRef()
    const size = useSize(presentationRef)

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

            <button className='viewWorkButton'
                onClick={() => {
                    app.current.scrollTo({
                        top: size.height,
                        behavior: 'smooth'
                    });
                }}>
                View my work
            </button>
        </section>
    )
}

export default Presentation