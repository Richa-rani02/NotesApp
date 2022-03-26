import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import {MdNewLabel } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
export const Sidebar = () => {
    return (
        <>
            <div className="sidebar sidebar-active">
            <Link className="side-links" to="/"> <FaHome size={25} /><span>Home</span></Link>
                <Link className="side-links" to="/"> <BiArchiveIn size={25} /><span>Archive</span></Link>
                <Link className="side-links" to="/"> <MdNewLabel size={25} /><span>Labels</span></Link>
                <Link className="side-links" to="/"> <FiTrash2 size={25} /><span>Trash</span></Link>
               
            </div>
        </>
    )
}