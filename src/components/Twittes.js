import React from 'react'
import { FaRegImage, FaRegListAlt, FaRegSmile, FaCalendarCheck } from "react-icons/fa"
import Posts from "./Posts"
const Twittes = () => {
    return (
        <div className="twittes">
            <div className="home">Home</div>
            <div className="postForm">
                <div className="postForm__first">
                    <span><img src="/Imran-Khan.jpg" alt="" /></span>
                    <input type="text" placeholder="What's happening? " />
                </div>
                <div className="postForm__bottom">
                    <div className="postForm__icons">
                        <FaRegImage className="ic" />
                        <FaRegListAlt className="ic" />
                        <FaRegSmile className="ic" />
                        <FaCalendarCheck className="ic" />
                    </div>
                    <div className="btnSection">
                        <input type="button" value="Tweet" className="btn btn-tweet" />
                    </div>

                </div>
            </div>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
        </div>
    )
}

export default Twittes
