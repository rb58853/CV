import './styles/desktop.css'
import EnglishPresentation from "../Presentation/presentation"
import Bar from "../bar/bar"
import About from '../about/about'

function Home() {
    return (
        <section className="home">
            <EnglishPresentation />
            <Bar />
            <div className="container">
                <About/>
            </div>
        </section>

    )
}
export default Home
