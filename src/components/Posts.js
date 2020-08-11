import React from 'react'
import { FaRegComment, FaUndoAlt, FaRegHeart, FaArrowUp } from "react-icons/fa"
const Posts = () => {
    return (
        <div className="posts">
            <div className="post__header">
                <div className="post__avator">
                    <img src="/Imran-Khan.jpg" alt="avator" />
                </div>
                <div className="post__name">
                    Shahid Afridi
                </div>
                <div className="post__username">
                    @ShahidKhan
                </div>
                <div className="post__time">
                    . 3m
                </div>
            </div>
            {/* Close post__header */}
            <div className="post__body">
                <div className="post__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque architecto laborum dolore corporis fugit quaerat amet quibusdam. Quas libero ex adipisci quo asperiores sint corrupti doloribus deleniti natus voluptatibus.
                </div>
                <div className="post__image">
                    <img src="/post.jpg" alt="post" />
                </div>
                <div className="post__comments">
                    <FaRegComment />
                    <span><FaUndoAlt /> 34</span>
                    <span><FaRegHeart /> 430</span>
                    <FaArrowUp />
                </div>
            </div>
        </div>
    )
}

export default Posts
