import './styles/desktop.css'
import './styles/mobile.css'
import '../../styles/style.css'
import { InfoBox, Languages, Skills } from "./core"
import { useState } from 'react'

function View() {
    const [info, setInfo] = useState('')
    const [boxInfoActive, setBoxInfoActive] = useState(false)
    
    return (<div className='skillsAndLenguagesBox'>
        <InfoBox info={info} active={boxInfoActive} />
        <div className='skillsAndLenguagesColums' >
            {/* <Skills setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} boxInfoActive={boxInfoActive} /> */}
            <Languages setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} boxInfoActive={boxInfoActive} />
        </div>
    </div>
    )
}

export default View