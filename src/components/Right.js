import React from 'react'
import Trends from "./Trends"
const Right = () => {
    return (
        <div className="right">
            <div className="searchBar">
                <input type="text" name="" className="search" placeholder="Search tweets" />
            </div>
            <Trends />
        </div>
    )
}

export default Right
