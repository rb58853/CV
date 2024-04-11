import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import projects from '../../data/projects'
import './styles/desktop.css'
import '../../styles/style.css'
import env from '../../environment/env'
import { useSize } from '../../hooks/useSize'

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
                <Container setProject={setProject} setWindowProject={setWindowProject} skill={skill} columns={env.projectColumns} />

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

function Container({ setProject, setWindowProject, skill }) {
    const [projectsView, setProjectsView] = useState([])
    const [columns, setColums] = useState(3)
    const [rows, setRows] = useState(0)
    const projectsContainerRef = useRef()
    const size = useSize(projectsContainerRef)

    useLayoutEffect(() => {
        if (size.width / (columns + 1) > env.boxProjectMinWidth)
            setColums(columns + 1)
        if (size.width / columns < env.boxProjectMinWidth)
            setColums(columns - 1)

    }, [size])

    useEffect(() => {
        let index = -1;
        let fullIndex = -1;
        let temp = [];
        let length = 0;

        Object.values(projects).forEach((project) => {
            if (skill === 'All' || project.skills.includes(skill)) {
                length += 1
            }
        })
        setRows(Math.ceil((length / columns)))

        Object.values(projects).forEach((project) => {
            fullIndex += 1
            if (skill === 'All' || project.skills.includes(skill)) {
                index += 1
                let rest = columns - (length % columns);

                let translateX = 100 * (index % columns);
                if (index / columns >= Math.floor(length / columns))
                    translateX += rest * 50;

                temp.push(<ProjectBox
                    project={project}
                    setProject={setProject}
                    setWindowProject={setWindowProject}
                    active={true}
                    translate={[translateX, 100 * Math.floor(index / columns)]}
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
    }, [skill, columns])

    return (
        <div className='projectsContainer'
            ref={projectsContainerRef}
            style={{ height: ((size.width * 3 / 4) / columns) * rows }}
        >
            {projectsView}
        </div>
    )
}

function ProjectBox({ project, setProject, setWindowProject, active, translate, columns }) {
    const [activeInfo, setActiveInfo] = useState('')
    const [activeButton, setActiveButton] = useState('')
    const widthFromColumns = 100 / columns;
    return (
        <div className={`projectBoxAbsolute ${active ? 'active' : ''}`}
            style={
                {
                    transform: `translate(${translate[0]}%,${translate[1]}%)`,
                    width: `${widthFromColumns}%`
                }
            }>

            <div className={`projectBox ${active ? 'active' : ''}`}
                onMouseOver={() => { setActiveInfo('active') }}
                onMouseOut={() => { setActiveInfo('') }}
            >
                <div className={`projectBoxInfoBackground ${activeInfo}`} />

                {project.images[0] && <img className={`projectBoxImage`} src={project.images[0]} alt='' />}
                {!project.images[0] &&
                    <div className='noImageProject'>
                        <h1> {project.title}</h1>
                    </div>}

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
    const carruselRef = React.useRef();
    const carruselImagesRef = React.useRef();
    const { width } = useSize(carruselRef)
    const [indexImage, setIndexImage] = useState(0)

    useEffect(() => {
        carruselImagesRef.current.scrollTo({
            // carruselRef.current.scrollTo({
            left: width * indexImage,
            behavior: 'smooth'
        });
    }, [indexImage])


    const images = [];
    project.images.map(path => {
        images.push(<img className='carruselImage' src={path} alt=""
            style={{ width: width }} />)
    })

    const details = Object.keys(project.features).map((key) => {
        return <text><b>{key}: </b> {project.features[key]}</text>
    })
    return (
        <div className={`projectWindowBack ${windowProject ? 'active' : ''}`}>
            <div className={`projectWindow ${windowProject ? 'active' : ''}`}>

                <div className='carruselContainer' ref={carruselRef}>
                    {
                        images.length > 1 && [<button className='switchImageButton next'
                            onClick={() => setIndexImage(Math.min(indexImage + 1, images.length - 1))}
                        > {'›'} </button>,
                        <button className='switchImageButton back'
                            onClick={() => setIndexImage(Math.max(indexImage - 1, 0))}
                        > {'‹'} </button>
                        ]
                    }
                    <div className='carrusel' ref={carruselImagesRef}>
                        {images}
                    </div>
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
