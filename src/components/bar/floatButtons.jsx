import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import './styles/desktop.css'

export function ChatButton() {
    return <Link to='/chat'>
        <Icon className='chatButton desktop' icon={'ci:chat'} />
    </Link>
}