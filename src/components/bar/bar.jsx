import { useDispatch, useSelector } from 'react-redux'
import './styles/desktop.css'
import './styles/mobile.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

function Bar() {
    const section = useSelector((state) => state.section).section
    return section != 'chat' && <div className="bar">
        <div className='barContent'>
            <Link className={`buttonSection ${section == 'home' ? 'active' : ''}`} to="/">
                <text className='label desktop'>
                    HOME
                </text>
                {/* <Icon className='iconSection mobile' icon={'bxs:home'} /> */}
                {/* <Icon className='iconSection mobile' icon={'majesticons:home'} /> */}
                {/* <Icon className='iconSection mobile' icon={'material-symbols:home-rounded'} /> */}
                <Icon className='iconSection mobile' icon={'mingcute:home-4-fill'} />
            </Link>
            <Link className={`buttonSection ${section == 'projects' ? 'active' : ''}`} to="/projects">
                <text className='label desktop'>
                    PROJECTS
                </text>
                {/* <Icon className='iconSection mobile' icon={'solar:code-scan-bold'} /> */}
                {/* <Icon className='iconSection mobile' icon={'solar:code-scan-bold-duotone'} /> */}
                <Icon className='iconSection mobile' icon={'tdesign:code'} />
                {/* <Icon className='iconSection mobile' icon={'pepicons-pop:code-circle-filled'} /> */}
                {/* <Icon className='iconSection mobile' icon={'heroicons-solid:code-bracket-square'} /> */}
                {/* <Icon className='iconSection mobile' icon={'heroicons-solid:code-bracket-square'} /> */}

            </Link>
            <Link className={`buttonSection ${section == 'skills' ? 'active' : ''}`} to="/skills">
                <text className='label desktop'>
                    SKILLS & LANGUAGES
                </text>
                {/* <Icon className='iconSection mobile' icon={'carbon:skill-level-intermediate'} /> */}
                {/* <Icon className='iconSection mobile' icon={'carbon:skill-level-advanced'} /> */}
                {/* <Icon className='iconSection mobile' icon={'gridicons:stats-up-alt'} /> */}
                {/* <Icon className='iconSection mobile' icon={'arcticons:spotistats'} /> */}
                <Icon className='iconSection mobile' icon={'ion:stats-chart'} style={{height:33}}/>
            </Link>
            <Link className={`buttonSection ${section == 'about' ? 'active' : ''}`} to="/about">
                <text className='label desktop'>
                    ABOUT
                </text>
                <Icon className='iconSection mobile' icon={'iconamoon:profile-fill'} />
            </Link>

            <Link className={`buttonSection mobile ${section == 'chat' ? 'active' : ''}`} to="/chat">
                <Icon className='iconSection mobile' icon={'majesticons:message'} />
                {/* <Icon className='iconSection mobile' icon={'bxs:message'} /> */}
            </Link>
        </div>
    </div>
}
export default Bar

