import './styles/desktop.css'
import './styles/mobile.css'
import '../../styles/style.css'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Contact from '../contact/contact.jsx'
import { aboutMe, interests, know, languages, personalInformation, studyFields } from '../../environment/data/personal.js'
import { useDispatch } from 'react-redux'
import { setSection } from '../../redux/sections/sectionSlice.jsx'
import setSectionFunction from '../../redux/sections/functions.jsx'

function About() {
    const dispatch = useDispatch()
    return (
        <section onFocus={setSectionFunction(dispatch, 'about')} className='aboutBackground'>
            <div className='about'>
                <div className='profileAbout'>
                    <div style={{ width: '100%', display: 'flex' }}>
                        <div className='personal'>
                            <Text value={"## Personal information"} />
                            <Text value={personalInformation} />
                        </div>
                        {/* <div>
                            Aqui va foto y eso
                            <Contact />
                        </div> */}
                    </div>

                    <div className='line' />
                    <Text value={aboutMe} />
                    {/* <div className='line' /> */}
                    {/* <Text value={interests} /> */}
                    <div className='line' />
                    <div className='columsOrRows'>
                        <Text value={studyFields} />
                        <Text value={know} />
                    </div>
                    <div className='line' />
                    <Text value={languages} />

                </div>

            </div>
        </section>
    )
}

function Text({ value }) {
    return <Markdown remarkPlugins={[remarkGfm]} className='aboutText'>
        {value}
    </Markdown>
}


export default About
