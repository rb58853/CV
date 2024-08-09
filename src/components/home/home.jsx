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
            <Presentation app={ref} />

            <div className="container">
                <Chat />
                {/* <Options/>
                <About />
                <Projects />
                <Contact /> */}
            </div>

        </section>
    )
}
export default Home
