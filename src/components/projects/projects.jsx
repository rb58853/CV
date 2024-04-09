import { useState } from 'react'
import projects from '../../data/proyects'
import './styles/desktop.css'
import '../../styles/style.css'

function Projects() {
    const [skill, setSkill] = useState('All')
    const [language, setLanguage] = useState(null)

    return (
        <section className="projects">
            <div className="projectsContent">
                <h1 className='defaultHeader'>
                    Projects
                </h1>
                <SkillsBar setSkill={setSkill} skillState={skill} />
                <Container />
            </div>
        </section>
    )

}

function SkillsBar({ setSkill, skillState }) {
    const buttons = []
    const skillsList = ['All']
    Object.values(projects).forEach(project => {
        project.skills.forEach(skill => {
            if (!(skill in skillsList))
                skillsList.push(skill)
        })
    })


    skillsList.forEach(skill => {
        buttons.push(
            <button className={`buttonSkill ${skill == skillState ? 'active' : ''}`}
                onClick={() => setSkill(skill)}
            >
                {skill}
            </button>)
    })

    return (
        <div className='skillsBar'>
            {buttons}
        </div>
    )
}

function Container() {
    const [currentProject, setCurrentProject] = useState(null)
    const projectsView = Object.values(projects).map(project => {
        return <ProjectBox project={project} />
    })

    return (
        <div className='projectsContainer'>
            {projectsView}
        </div>
    )
}

function ProjectBox({ project }) {
    const [activeInfo, setActiveInfo] = useState('')
    const [activeButton, setActiveButton] = useState('')
    return (
        <div className='projectBox'
            onMouseOver={() => { setActiveInfo('active') }}
            onMouseOut={() => { setActiveInfo('') }}
        >
            <div className={`projectBoxInfoBackground ${activeInfo}`} />
            <div className={`projectBoxInfo top ${activeInfo}`}>
                <h1>{project.title}</h1>
                <text>{project.languages.join(' / ')}</text>
            </div>

            <div className={`projectBoxInfo bottom ${activeInfo}`}>
                <button className={`viewProjectButton ${activeButton}`}
                    onMouseOver={() => setActiveButton('active')}
                    onMouseOut={() => setActiveButton('')}
                >
                    LEARN MORE
                </button>
            </div>
        </div>
    )
}
export default Projects
