import React from 'react'
import StoryCard from '../StoryCard/StoryCard';
import story1 from "../../assets/Stories/story1.jpeg";
import story2 from "../../assets/Stories/story2.jpg";
import story3 from "../../assets/Stories/story3.jpg";
import story4 from "../../assets/Stories/story4.jpeg";
import story5 from "../../assets/Stories/story5.png";
import story6 from "../../assets/Stories/story6.jpg";
import story7 from "../../assets/Stories/story7.jpg";
import "./MainArea.css";
import PostCard from '../PostCard/PostCard';
import post1 from "../../assets/Posts/post1.png";
import post2 from "../../assets/Posts/post2.png";
import post3 from "../../assets/Posts/post3.png";
import post4 from "../../assets/Posts/post4.png";
import post5 from "../../assets/Posts/post5.png";
export default function MainArea() {
    return (
        <div className="mainarea">
           <div className="storyArea">
               {/* story */}
               <StoryCard img={story1} username="Vaibhav"/>
               <StoryCard img={story2} username="Shadow"/>
               <StoryCard img={story3} username="Vintage"/>
               <StoryCard img={story4} username="Atharv"/>
               <StoryCard img={story5} username="Vedant"/>
               <StoryCard img={story6} username="Adarsh"/>
               <StoryCard img={story7} username="Pratik"/>
           </div>
           <div className="postArea">
               {/* posts */}
               <PostCard PostImg={post1} likes="7,546" username="petslover_vvt"/>
               <PostCard PostImg={post2} likes="11,587" username="vintage100"/>
               <PostCard PostImg={post3} likes="1,34,694" username="fish_india"/>
               <PostCard PostImg={post4} likes="965" username="sports_6016"/>
               <PostCard PostImg={post5} likes="34,512" username="dogo_world"/>
           </div>
        </div>
    )
}
