import { createHashRouter } from 'react-router-dom';

import App from '../App.jsx';
import Home from '../components/home/home.jsx';

const routes = [
    {
        path: "/",
        element: <App/>,
    },
]

export const router = createHashRouter(routes)