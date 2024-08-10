import './styles/desktop.css'
import './styles/mobile.css'
import Presentation from "../Presentation/presentation"
import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'

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
            <img className='photo' src={process.env.PUBLIC_URL + "/images/profile.jpg"} alt="profile" />
            <div>
                <h3>Raul Beltran</h3>
                <text>comupter Scientist</text>
            </div>
        </div>
        <div className='line' />

        <div className='info'>
            <a href='sadass' className='infoRow'>
                <Icon className='icon' icon="bi:github" />
                <text> rb58853</text>
            </a>
            <a href='sadass' className='infoRow'>
                <Icon className='icon' icon="mdi:telegram" />
                <text> @rb58853</text>
            </a>

            <a href='sadass' className='infoRow'>
                <Icon className='icon' icon="mdi:gmail" />
                <text> rb58853@gmail.com</text>
            </a>

            <div className='infoRow'>
                <Icon className='icon' icon="mdi:phone" />
                <text> +53 58486223</text>
            </div>

            <div className='infoRow'>
                <Icon className='icon' icon="mdi:location" />
                <text> Havana, Cuba</text>
            </div>

            <Link className='aboutText' to="">
                More about me
            </Link>
        </div>

    </div>
}
export default Home
