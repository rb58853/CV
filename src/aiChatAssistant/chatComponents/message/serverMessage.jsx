import { useSelector } from 'react-redux'
import './styles/desktop.css'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ProjectMessage from '../projectMessage/projectMessage';
import projects from '../../../environment/data/projects';


function ServerMessage({ data }) {
    const ws = useSelector((state) => state.ws)
    const header = data['response']

    let projectsView = []
    if (data['projects'].length > 0) {
        const projectsData = data['projects']
        projectsView = Object.keys(projects).map(key => {
            return <ProjectMessage key={key} project={projects[key]} comment={projectsData[key]} />
        })
    }

    return (
        <div className="serverMessage">
            {data && <Message projects={projectsView} header={header} />}
            <div className="line" />
        </div>
    )
}
function Message({ projects, header }) {
    return (
        <div>
            <Markdown remarkPlugins={[remarkGfm]} className='headerServer'>
                {header}
            </Markdown>
            {
                projects.length > 0 &&
                <div className='projects'>
                    {projects}
                </div>
            }
        </div>
    )
}
export default ServerMessage