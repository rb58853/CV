import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import './styles/desktop.css'
import { useSelector } from "react-redux";

export function ChatButton() {
    const activeState = useSelector((state) => state.ws).floatButton

    return <Link to='/chat'>
        <Icon className={`chatButton desktop ${activeState}`} icon={'ci:chat'} />
    </Link>
}