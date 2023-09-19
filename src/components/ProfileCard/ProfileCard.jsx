import React from 'react'
import "./ProfileCard.css";

export default function ProfileCard({ mainProfile, userName, name, btnText, width }) {
    return (
        <div className="profileCard">
            <img src={mainProfile} alt="profile pic" width={width}/>
            <div className="profileCard__Names">
                <span className="profileCard__Username">{userName}</span>
                <span className="profileCard__Name"><small>{name}</small></span>
            </div>
            <a href="#"><small>{btnText}</small></a>
        </div>
    )
}
