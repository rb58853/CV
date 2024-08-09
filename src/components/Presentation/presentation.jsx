import { useEffect, useRef, useState } from 'react'
import { name } from '../../environment/data/about'
import './styles/desktop.css'
import './styles/mobile.css'
import { useSize } from '../../hooks/useSize.jsx'

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

            <div className='selectSpace'>
                <div className='viewMyWork'>
                    <button className='viewWorkButton'
                        onClick={() => { }}>
                        View my work
                    </button>
                    <div className='viewMyWorkContain'>
                        Cosas aqui del work
                    </div>
                </div>

                <div className='viewMyWork'>
                    <button className='viewWorkButton'
                        onClick={() => { }}>
                        Chat with me
                    </button>
                    <div className='viewMyWorkContain'>
                        Cosas aqui del work
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation