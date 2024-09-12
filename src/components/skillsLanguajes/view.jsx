import './styles/desktop.css'
import './styles/mobile.css'
import '../../styles/style.css'
import { InfoBox, Languages, Skills } from "./core"
import { useState } from 'react'
import { setSection } from '../../redux/sections/sectionSlice'
import { useDispatch } from 'react-redux'
import setSectionFunction from '../../redux/sections/functions'
import skills from '../../environment/data/skills'

function View() {
    const [info, setInfo] = useState('')
    const [boxInfoActive, setBoxInfoActive] = useState(false)
    const dispatch = useDispatch()

    return (<div onFocus={setSectionFunction(dispatch, 'skills')} className='skillsAndLenguagesBox'>
        <InfoBox info={info} active={boxInfoActive} />
        <div className='skillsAndLenguagesColums' >
            <Languages setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} boxInfoActive={boxInfoActive} />
            <div className='line'/>
            <Skills setBoxInfoActive={setBoxInfoActive} setInfo={setInfo} boxInfoActive={boxInfoActive} />
        </div>
    </div>
    )
}

export default View