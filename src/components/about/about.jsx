import './styles/desktop.css'
import '../../styles/style.css'
import skills from '../../data/skills.js'
import languages from '../../data/languages.js'
import { sortDictionary, sortDictionaryByValue } from '../../utils/sortDictionary.js'
import about from '../../data/about.js'

function About() {
    return (
        <section className='about'>
            <h1 className='defaultHeader'>About</h1>
            <div className='profileAbout'>
                <img className='profileImage' src="/images/profile.jpg" alt="profile" />
                <AboutText />
            </div>
            <div className='skillsAndLenguagesBox'>
                <Skills />
                <Languages />
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

function Languages() {
    const languagesView = Object.values(SortedBars(languages)).map((item) => {
        return <ProgressBar label={item.label} percentage={item.skill} />
    })

    return (
        <div className='progressBarsContainer'>
            <h1>Languages</h1>
            {languagesView}
        </div>
    )
}

function Skills() {
    const skillsView = Object.values(SortedBars(skills)).map((item) => {
        return <ProgressBar label={item.label} percentage={item.skill} />
    })

    return (
        <div className='progressBarsContainer'>
            <h1>Skills</h1>
            {skillsView}
        </div>
    )
}

function ProgressBar({ label, percentage }) {
    percentage /= 100
    return (
        <div className='progressBar'>
            <div className='progressBarLabel'>
                {label}
            </div>

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
