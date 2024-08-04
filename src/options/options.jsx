import { useEffect, useState } from 'react';
import './styles/desktop.css'
import env from '../environment/env';
import SwitchTheme from '../environment/styles/themes'

function Options() {
    return (
        <div className='optionsBar'>
            <Mode />
        </div>
    )
}

function Mode() {
    const [mode, setMode] = useState(env.mode)
    useEffect(() => {
        SwitchTheme(mode)
    }, [mode]);
    return (

        <button
            style={{
                height: 'min(5vh, 50px)',
                aspectRatio: 1/1,
                border: 'none',
                backgroundColor: 'rgba(0,0,0,0)',
                cursor: 'pointer',
            }}
            onClick={() => {
                if (mode == 'light')
                    setMode('dark')
                if (mode == 'dark')
                    setMode('light')
            }}
        >
            <img src={process.env.PUBLIC_URL + `/images/icons/${mode}.svg`}
                style={{
                    height: '100%',
                    width: '100%',
                }}
            />
        </button>
    )
}

export default Options
