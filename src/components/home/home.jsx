import './styles/desktop.css'
import EnglishPresentation from "../Presentation/presentation"
import Bar from "../bar/bar"
import About from '../about/about'
import Projects from '../projects/projects'
import Contact from '../contact/contact'

function Home() {
    return (
        <section className="home">
            <Bar />
            <EnglishPresentation />
            <div className="container">
                <About />
                <Projects/>

                <Contact/>

            </div>
        </section>

    )
}
export default Home
