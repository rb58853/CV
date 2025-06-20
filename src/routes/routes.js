import { createHashRouter } from 'react-router-dom';

import App from '../App.jsx';
import Home from '../components/home/home.jsx';
import Projects from '../components/projects/projects.jsx';
import View from '../components/skillsLanguajes/view.jsx';
import About from '../components/about/about.jsx';
import Chat from '../aiChatAssistant/chat.jsx'

const routes = [
    {
        path: "/",
        element: <App content={<Home />} />,
    },
    {
        path: "/projects",
        element: <App content={<Projects />} />,
    },
    {
        path: "/skills",
        element: <App content={<View />} />,
    },
    {
        path: "/about",
        element: <App content={<About />} />,
    },
    {
        path: "/chat",
        element: <App content={<Chat />} />,
    },
]

export const router = createHashRouter(routes)