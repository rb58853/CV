import './styles/desktop.css'
import Presentation from "../Presentation/presentation"
import Bar from "../bar/bar"
import About from '../about/about'
import Projects from '../projects/projects'
import Contact from '../contact/contact'
import React, { useEffect, useRef } from 'react'
import Options from '../../options/options'
import Chat from '../../aiChatAssistant/chat'

function Home() {
    const ref = React.useRef(null);
    return (
        <section className="home"
            ref={ref}>
            <Profile />
            <Presentation app={ref} />
        </section>
    )
}

function Profile() {
    return <div className='profile'>
        <div className='profilePhotoAndName'>
            <img className='photo' src="" alt="profile" />
            <div>
                <h3>Raul Beltran</h3>
                <h4>comupter Scientist</h4>
            </div>
        </div>

    </div>
}
export default Home
