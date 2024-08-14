import { useDispatch, useSelector } from 'react-redux'
import './styles/desktop.css'
import './styles/mobile.css'
import { Link } from 'react-router-dom'
import { setSection } from '../../redux/sections/sectionSlice'
import { Icon } from '@iconify/react/dist/iconify.js'

function Bar() {
    const section = useSelector((state) => state.section).section
    return section != 'chat' && <div className="bar">
        <div className='barContent'>
            <Link className={`buttonSection ${section == 'home' ? 'active' : ''}`} to="/">
                <text className='label desktop'>
                    HOME
                </text>
                <Icon className='iconSection mobile' icon={'tabler:home'} />
            </Link>
            <Link className={`buttonSection ${section == 'projects' ? 'active' : ''}`} to="/projects">
                <text className='label desktop'>
                    PROJECTS
                </text>
                <Icon className='iconSection mobile' icon={'tdesign:code'} />
            </Link>
            <Link className={`buttonSection ${section == 'skills' ? 'active' : ''}`} to="/skills">
                <text className='label desktop'>
                    SKILLS & LANGUAGES
                </text>
                <Icon className='iconSection mobile' icon={'carbon:skill-level-intermediate'} />
            </Link>
            <Link className={`buttonSection ${section == 'about' ? 'active' : ''}`} to="/about">
                <text className='label desktop'>
                    ABOUT
                </text>
                <Icon className='iconSection mobile' icon={'akar-icons:person'} />
            </Link>

            <Link className={`buttonSection mobile ${section == 'chat' ? 'active' : ''}`} to="/chat">
                <Icon className='iconSection mobile' icon={'ci:chat'} />
            </Link>
        </div>
    </div>
}
export default Bar

