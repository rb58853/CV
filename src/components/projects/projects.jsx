import './styles/desktop.css'
function Projects() {
    return (
        <section className="projects">
            <div className="projectsContent">
                <SkillsBar />
            </div>
        </section>
    )

}

function SkillsBar() {
    const buttons = []
    buttons.push(<button>
        React
    </button>)

    buttons.push(<button>
        ML
    </button>)
    
    buttons.push(<button>
        Unity
    </button>)
    

    return (
        <div className='skillsBar'>
            {buttons}
        </div>
    )
}

function Container() {
    return (
        <div className='projectsContainer'>

        </div>
    )
}

function ProjectBox() {
    return (
        <div className='projectBox'>

        </div>
    )
}
export default Projects
