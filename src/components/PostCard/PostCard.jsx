import React from 'react'
import "./PostCard.css";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {FaUserCircle} from "react-icons/fa";
// import post1 from "../../assets/Posts/post1.png";
import {AiOutlineHeart} from "react-icons/ai";
import {BsChat} from "react-icons/bs";
import {FiSend} from "react-icons/fi";
import {BsBookmark} from "react-icons/bs";
import {BsEmojiSmile} from "react-icons/bs";
export default function PostCard({ PostImg, likes, username}) {
    return (
        <div className="postCard">
          <div className="postCard__header">
            <div>
               <FaUserCircle className="postIcon"/>
               <span>{username}</span>
            </div>
            <span>
               <BiDotsHorizontalRounded/>
            </span>
          </div>  
            <img src={PostImg} width="100%" alt="post"/>
            <div className="postActions">
                <div> 
                   <AiOutlineHeart className="postIcon heartIcon"/>
                   <BsChat className="postIcon"/>
                   <FiSend className="postIcon"/>
                </div>   
                <BsBookmark className="postIcon"/>
            </div>
            <div className="postCard__content">
                <span>
                    <b>{likes} likes</b>
                </span>
                <span>
                    <b>{username}</b>
                </span>
                <span className="lighterText">View all 258 comments</span>
                <span>
                    <b>psychopath.__</b>Good 
                </span>
                <span>
                    <b>conradpamungkas</b> Real!!👏👏👏
                </span>
                <span className="lighterText">
                    <small>1 DAY AGO</small>
                </span>
            </div>
            <div className="postCard__commentArea">
                 <BsEmojiSmile className="postIcon"/>
                 <input type="text" placeholder="Add a comment..."/>
                  <a href="#">Post</a>
            </div>
        </div>
    )
}
