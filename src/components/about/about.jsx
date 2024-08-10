import './styles/desktop.css'
import './styles/mobile.css'
import '../../styles/style.css'
import skills from '../../environment/data/skills.js'
import languages from '../../environment/data/languages.js'
import { sortDictionary, sortDictionaryByValue } from '../../utils/sortDictionary.js'
import about from '../../environment/data/about.js'
import { useState } from 'react'

function About() {
    const [info, setInfo] = useState('')
    const [boxInfoActive, setBoxInfoActive] = useState(false)

    return (
        <section className='aboutBackground'>
            <div className='about'>
                <h1 className='defaultHeader'>About</h1>
                <div className='profileAbout'>
                    {/* <img className='profileImage'
                        src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                        alt="profile" /> */}
                    <AboutText />
                </div>
                <div className='line' />

                {/* <div className='skillsAndLenguagesBox'>
                    <InfoBox info={info} active={boxInfoActive} />
                    <div className='skillsAndLenguagesColums' >
                        <Skills setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} boxInfoActive={boxInfoActive} />
                        <Languages setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} boxInfoActive={boxInfoActive} />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

function AboutText() {
    const parraphs = about.split('\n').map(parraph => {
        return <p>{parraph}</p>
    })
    return <div className='aboutText'> {parraphs}</div>
}


export default About
