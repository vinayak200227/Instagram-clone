import React from 'react'
import "./StoryCard.css";

export default function StoryCard({img, username}) {
    return (
        <div className="storycard">
            <img src={img} width="60px" height="60px" alt="story " className="storyImg"/>
            
                <center>{username}</center>
        </div>
        
    )
}
