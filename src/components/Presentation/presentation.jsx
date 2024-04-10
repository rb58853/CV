import './styles/desktop.css'
function EnglishPresentation() {
    return (
        <section className="presentation">
            <text>
                {`Hello, I'm `}
                <text style={{ color: 'rgb(227, 27, 109)', fontWeight: 500 }}>
                    Raul Beltran
                </text>
                .
            </text>
            <text>
                {`I'm a `}
                <text style={{ color: 'white' }}>
                    Computer Scientist
                </text>
            </text>
            
            <button className='viewWorkButton'>
                View my work
            </button>

        </section>
    )
}

export default EnglishPresentation