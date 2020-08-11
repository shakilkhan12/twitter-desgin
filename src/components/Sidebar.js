import React from 'react'
import { FaHome, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaClipboardList, FaUserAlt, FaMehBlank } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai'

const Sidebar = () => {
    return (
        <ul className="sidebar">
            <li>
                <a href=""><AiOutlineTwitter className="icon logo" /></a>
            </li>
            <li><a href=""><FaHashtag className="icon logo" /><span>Explore</span></a></li>
            <li><a href=""><FaRegBell className="icon" /><span>Notifications</span></a></li>
            <li><a href=""><FaRegEnvelope className="icon" /><span>Messages</span></a></li>
            <li><a href=""><FaRegBookmark className="icon" /><span>Bookmarks</span></a></li>
            <li><a href=""><FaClipboardList className="icon" /><span>Lists</span></a></li>
            <li><a href=""><FaUserAlt className="icon" /><span>Profile</span></a></li>
            <li><a href=""><FaMehBlank className="icon" /><span>More</span></a></li>
            <li><a href="" className="profileBtn">Tweet</a></li>
        </ul >
    )
}

export default Sidebar
