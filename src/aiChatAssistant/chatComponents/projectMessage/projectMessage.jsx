import { useRef, useState } from "react"
import { ProjectBox, ProjectWindow } from "../../../components/projects/projects"
import './styles/desktop.css'
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
function ProjectMessage({ projectInput, comment }) {
    const [project, setProject] = useState(projectInput)
    const [windowProject, setWindowProject] = useState(false)

    return (
        <section className="projectMessage">
            <div className="boxProjectMessage">
                <ProjectBox
                    project={project}
                    setProject={setProject}
                    setWindowProject={setWindowProject}
                    active={true}
                    translate={[0, 0]}
                    columns={1}
                />
            </div>
            <h4 style={{ marginBlock: 5 }}>{projectInput.title}</h4>
            <div className="line" />

            <Markdown remarkPlugins={[remarkGfm]} >
                {comment}
            </Markdown>
            <ProjectWindow project={project} setWindowProject={setWindowProject} windowProject={windowProject} />
        </section>
    )
}

export default ProjectMessage