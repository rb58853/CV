import { useDispatch, useSelector } from 'react-redux'
import './styles/desktop.css'
import './styles/mobile.css'
import { Link } from 'react-router-dom'
import { setSection } from '../../redux/sections/sectionSlice'

function Bar() {
    const section = useSelector((state) => state.section).section
    return section != 'chat' && <div className="bar">
        <div className='barContent'>
            <Link className={`buttonSection ${section == 'home' ? 'active' : ''}`} to="/">HOME</Link>
            <Link className={`buttonSection ${section == 'projects' ? 'active' : ''}`} to="/projects">PROJECTS</Link>
            <Link className={`buttonSection ${section == 'skills' ? 'active' : ''}`} to="/skills">SKILLS & LANGUAGES</Link>
            <Link className={`buttonSection ${section == 'about' ? 'active' : ''}`} to="/about">ABOUT</Link>
        </div>
    </div>
}
export default Bar

