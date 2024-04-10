import { useEffect, useState } from 'react'
import projects from '../../data/projects'
import './styles/desktop.css'
import '../../styles/style.css'

function Projects() {
    const [skill, setSkill] = useState('All')
    const [project, setProject] = useState(Object.values(projects)[0])
    const [windowProject, setWindowProject] = useState(false)

    return (
        <section className="projects">
            <div className="projectsContent">
                <h1 className='defaultHeader'>
                    Projects
                </h1>
                <SkillsBar setSkill={setSkill} skillState={skill} />
                <Container setProject={setProject} setWindowProject={setWindowProject} skill={skill} columns={4} />
                
                {
                    <ProjectWindow project={project} setWindowProject={setWindowProject} windowProject={windowProject} />
                }
            </div>
        </section>
    )
}

function SkillsBar({ setSkill, skillState }) {
    const buttons = []
    const skillsList = ['All']
    Object.values(projects).forEach(project => {
        project.skills.forEach(skill => {
            if (!skillsList.includes(skill))
                skillsList.push(skill)
        })
    })
    skillsList.forEach(skill => {
        buttons.push(
            <button className={`buttonSkill ${skill === skillState ? 'active' : ''}`}
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

function Container({ setProject, setWindowProject, skill, columns = 3 }) {
    // const [projectsJson, setProjectsJson] = useState(projects)
    const [projectsView, setProjectsView] = useState([])

    useEffect(() => {
        // let newProjectsJson = {}
        // Object.keys(projects).forEach(key => {
        //     if (skill === 'All' || projects[key].skills.includes(skill))
        //         newProjectsJson[key] = projects[key];
        // })

        let index = -1;
        let fullIndex = -1;
        let temp = []

        Object.values(projects).forEach((project) => {
            fullIndex += 1
            if (skill === 'All' || project.skills.includes(skill)) {
                index += 1
                temp.push(<ProjectBox
                    project={project}
                    setProject={setProject}
                    setWindowProject={setWindowProject}
                    active={true}
                    translate={[100 * (index % columns), 100 * Math.floor(index / columns)]}
                    columns={columns}
                />)
            }
            else {
                temp.push(<ProjectBox
                    project={project}
                    setProject={setProject}
                    setWindowProject={setWindowProject}
                    active={false}
                    translate={[100 * (fullIndex % columns), 100 * Math.floor(fullIndex / columns)]}
                    columns={columns}
                />)
            }
        })

        setProjectsView(temp)

        // setProjectsJson(newProjectsJson)
    }, [skill])

    return (
        <div className='projectsContainer'>
            {projectsView}
        </div>
    )
}

function ProjectBox({ project, setProject, setWindowProject, active, translate, columns }) {
    const [activeInfo, setActiveInfo] = useState('')
    const [activeButton, setActiveButton] = useState('')
    // const [translate, setTranslate] = useState(translateIn)
    const widthFromColumns = 100 / columns;
    return (
        <div className={`projectBoxAbsolute ${active ? 'active' : ''}`}
            style={
                {
                    transform: `translate(${translate[0]}%,${translate[1]}%)`,
                    // width: `${widthFromColumns}%'`
                    width: `25%'`
                }

            }>

            <div className={`projectBox ${active ? 'active' : ''}`}
                onMouseOver={() => { setActiveInfo('active') }}
                onMouseOut={() => { setActiveInfo('') }}
            >
                <div className={`projectBoxInfoBackground ${activeInfo}`} />
                {project.images[0] && <img className={`projectBoxImage`} src={project.images[0]} alt='' />}

                <div className={`projectBoxInfo top ${activeInfo}`}>
                    <h1>{project.title}</h1>
                    <text>{project.languages.join(' / ')}</text>
                </div>

                <div className={`projectBoxInfo bottom ${activeInfo}`}>
                    <button className={`viewProjectButton ${activeButton}`}
                        onMouseOver={() => setActiveButton('active')}
                        onMouseOut={() => setActiveButton('')}
                        onClick={() => {
                            setProject(project)
                            setWindowProject(true)
                        }}
                    >
                        LEARN MORE
                    </button>

                </div>
            </div>
        </div>
    )
}

function ProjectWindow({ project, setWindowProject, windowProject }) {
    const details = Object.keys(project.features).map((key) => {
        return <text><b>{key}: </b> {project.features[key]}</text>
    })

    return (
        <div className={`projectWindowBack ${windowProject ? 'active' : ''}`}>
            <div className={`projectWindow ${windowProject ? 'active' : ''}`}>

                <div className='carrusel'>
                    <img className='carruselImage' src={project.images[0]} alt="" />
                </div>
                <div className='proyectWindowText'>
                    <h1>{project.title}</h1>
                    <text>{"" + project.skills.join(' / ') + " | " + project.languages.join(' / ')}</text>
                    {/* <div className='line' /> */}

                    <div className='description'>
                        <div className='features'>
                            {details}
                        </div>
                        <text>{project.description}</text>
                    </div>

                    <div className='endBar'>
                        {project.github && <a href={project.github}
                            className={`viewOnGithub ${windowProject ? 'active' : ''}`}> View on github </a>}

                        {project.paper && <a href={project.paper}
                            className={`viewOnGithub ${windowProject ? 'active' : ''}`}> Read paper </a>}

                        {project.sitie && <a href={project.sitie}
                            className={`viewOnGithub ${windowProject ? 'active' : ''}`}> Visit sitie </a>}

                        {project.app && <a href={project.app}
                            className={`viewOnGithub ${windowProject ? 'active' : ''}`}> App </a>}

                        <button className='buttonClose'
                            onClick={() => { setWindowProject(false) }}
                        >
                            <img className='closeImage' src="/images/icons/close.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
