import { useRef, useState } from "react"
import { ProjectWindow } from "../../../components/projects/projects"
import './styles/desktop.css'
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
function ProjectMessage({ project, comment,windowProject, setWindowProject, setProject }) {

    return (
        <section className="projectMessage"
            onClick={() => {
                if (!windowProject) {
                    setProject(project)
                    setWindowProject(true)
                }
            }}
        >
            <SimpleProjectOverview project={project} />

            <h4 style={{ marginBlock: 5 }}>{project.title}</h4>
            <div className="line" />

            <Markdown remarkPlugins={[remarkGfm]} >
                {comment}
            </Markdown>
           
        </section>
    )
}

function SimpleProjectOverview({ project }) {
    return <div className="boxProjectMessage">
        {
            project.image
                ? <img className="imageProjectOverview" src={process.env.PUBLIC_URL + project.image} alt="" />
                : project.images[0] && <img className="imageProjectOverview" src={process.env.PUBLIC_URL + project.images[0]} alt='' />
        }

    </div>
}
export default ProjectMessage