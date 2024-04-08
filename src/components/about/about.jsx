import './styles/desktop.css'
import '../../styles/style.css'
import skills from '../../data/skills.js'
import languages from '../../data/languages.js'
import { sortDictionary, sortDictionaryByValue } from '../../utils/sortDictionary.js'
import about from '../../data/about.js'
import { useState } from 'react'

function About() {
    const [info, setInfo] = useState('')
    const [boxInfoActive, setBoxInfoActive] = useState(false)

    return (
        <section className='aboutBackground'>
            <div className='about'>
                <h1 className='defaultHeader'>About</h1>
                <div className='profileAbout'>
                    <img className='profileImage' src="/images/profile.jpg" alt="profile" />
                    <AboutText />
                </div>
                <div className='line' />

                <div className='skillsAndLenguagesBox'>
                    <InfoBox info={info} active={boxInfoActive} />
                    <div className='skillsAndLenguagesColums' >
                        <Skills setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} />
                        <Languages setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} />
                    </div>
                </div>
            </div>
        </section>
    )
}

function InfoBox({ info, active }) {
    return <div className={`infoBox ${active ? 'active' : ''}`}>
        {info}
    </div>
}

function AboutText() {
    const parraphs = about.split('\n').map(parraph => {
        return <p>{parraph}</p>
    })
    return <div className='aboutText'> {parraphs}</div>
}

function Languages({ setBoxInfoActive, setInfo }) {
    const languagesView = Object.values(SortedBars(languages)).map((item) => {
        return <ProgressBar label={item.label} info={item.info} percentage={item.skill} setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} />
    })

    return (
        <div className='progressBarsContainer'>
            <h1>Languages</h1>
            {languagesView}
        </div>
    )
}

function Skills({ setBoxInfoActive, setInfo }) {
    const skillsView = Object.values(SortedBars(skills)).map((item) => {
        return <ProgressBar label={item.label} info={item.info} percentage={item.skill} setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} />
    })

    return (
        <div className='progressBarsContainer'>
            <h1>Skills</h1>
            {skillsView}
        </div>
    )
}

function ProgressBar({ label, info, percentage, setBoxInfoActive, setInfo }) {
    percentage /= 100
    return (
        <div className='progressBar'>
            <label className='progressBarLabel'
                onMouseEnter={() => {
                    setBoxInfoActive(true)
                    setInfo(info)
                }}
                onMouseOut={() => {
                    setBoxInfoActive(false)
                }}
            >
                {label}
            </label>

            <div className='progressBarBackground'>
                <div className='progress' style={{ width: `calc(100% * ${percentage})` }} />
            </div>
        </div>
    )
}

function SortedBars(dic) {
    const tempLanguages = {}

    Object.keys(dic).forEach((item) => {
        tempLanguages[item] = dic[item].skill;
    })

    return Object.keys(sortDictionaryByValue(tempLanguages)).map(item => {
        return dic[item]
    })
}

export default About
