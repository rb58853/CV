import './styles/desktop.css'
import './styles/mobile.css'
import env from '../../environment/env'
import { Link } from 'react-router-dom'

function Bar() {
    return <div className="bar">
        <div className='barContent'>
            <Link className='buttonSection' to="/">
                HOME
            </Link>
            <div className='verticalLine' />
            <Link className='buttonSection' to="/projects">PROJECTS</Link>
            <div className='verticalLine' />
            <Link className='buttonSection' to="/skills">SKILLS & LANGUAGES</Link>
            <div className='verticalLine' />
            <Link className='buttonSection' to="">ABOUT</Link>



        </div>
        {/* <div className='barLine'/> */}
    </div>
}
export default Bar

