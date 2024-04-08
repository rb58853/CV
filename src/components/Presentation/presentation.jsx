import './styles/desktop.css'
function EnglishPresentation() {
    return (
        <section className="presentation">
            <text>
                {`Hello, I'm `}
                <text style={{ color: 'white' }}>
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
        </section>
    )
}

export default EnglishPresentation