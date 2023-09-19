import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard';
import "./Sidebar.css";

import mainprofile from "../../assets/Profiles/mainprofile.png";
import profile1 from "../../assets/Profiles/profile1.jpg";
import profile2 from "../../assets/Profiles/profile2.gif";
import profile3 from "../../assets/Profiles/profile3.jpg";
import profile4 from "../../assets/Profiles/profile4.jpg";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <ProfileCard mainProfile={mainprofile} userName="vinayak_takale_" name="Vinayak Vasant Takale" btnText="Switch" width="60px"/>
            
            <div className="suggestionsArea">
                 <span>Suggestions For You</span>
                 <a href="#"><small>See All</small></a>
            </div>
            <div className="suggesCards">
            <ProfileCard mainProfile={profile1} userName="parag81" name="New to Instagram" btnText="Follow" width="30px"/>
            <ProfileCard mainProfile={profile2} userName="adity.lap" name="Follows you" btnText="Follow" width="30px"/>
            <ProfileCard mainProfile={profile3} userName="rohan5794" name="Follows you" btnText="Follow" width="30px"/>
            <ProfileCard mainProfile={profile4} userName="prut1.23" name="New to Instagram" btnText="Follow" width="30px"/>
            </div>

            <div className="sidebarLinks">
            <span>About .</span>
            <span>Help .</span>
            <span>Press .</span>
            <span>API .</span>
            <span>Jobs .</span>
            <span>Privacy .</span>
            <span>Terms .</span>
            <span>Locations .</span>
            <span>Top .</span>
            <span>Accounts .</span>
            <span>Hashtags .</span>
            <span>Language .</span>
            <span>English .</span><br/><br/>
            <span id="footercredits">© 2021 INSTAGRAM FROM META</span>
            </div>
        </div>
    )
}
