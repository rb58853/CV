import { createHashRouter } from 'react-router-dom';

import App from '../App.jsx';
import Home from '../components/home/home.jsx';
import Projects from '../components/projects/projects.jsx';
import View from '../components/skillsLanguajes/view.jsx';


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
]

export const router = createHashRouter(routes)