import './styles/desktop.css'
import EnglishPresentation from "../Presentation/presentation"
import Bar from "../bar/bar"
import About from '../about/about'
import Projects from '../projects/projects'

function Home() {
    return (
        <section className="home">
            <Bar />
            <EnglishPresentation />
            <div className="container">
                <About />
                <Projects/>
                <div style={{height:500}}/>

            </div>
        </section>

    )
}
export default Home
