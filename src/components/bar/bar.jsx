import './styles/desktop.css'
import env from '../../environment/env'
import { Link } from 'react-router-dom'

function Bar() {
    return <div className="bar">
        <div className='barContent'>
            <Link className='buttonSection' to="/">
                HOME
            </Link>
            <Link className='buttonSection' to="/projects">PROJECTS</Link>

            <Link className='buttonSection' to="/skills">SKILLS & LANGUAGES</Link>

            <Link className='buttonSection' to="">ABOUT</Link>



        </div>
        {/* <div className='barLine'/> */}
    </div>
}
export default Bar

