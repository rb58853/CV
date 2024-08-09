import { ProjectBox, ProjectWindow } from "../../../components/projects/projects"

function ProjectMessage({ project, comment }) {
    const [project, setProject] = useState(project)
    const [windowProject, setWindowProject] = useState(false)

    const [projectsView, setProjectsView] = useState([])
    const projectsContainerRef = useRef()
    const rows = 1
    const size = 300


    return (
        <section className="projectMessage">
            <p>{comment}</p>
            <ProjectBox
                project={project}
                setProject={setProject}
                setWindowProject={setWindowProject}
                active={true}
                translate={[0, 0]}
                columns={1}
            />
            {
                <ProjectWindow project={project} setWindowProject={setWindowProject} windowProject={windowProject} />
            }
        </section>
    )
}

export default ProjectMessage