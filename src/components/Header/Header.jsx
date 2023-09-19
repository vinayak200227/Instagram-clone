import React from 'react';
import "./Header.css";
import logo from "../../assets/logo.png";
import searchIcon from"../../assets/search.svg";
import {HiHome} from "react-icons/hi";
import {RiMessengerLine} from "react-icons/ri";
import {ImCompass2} from "react-icons/im";
import {BsHeart} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                 <img src={logo} alt="logo" width="103px" height='29px"' />
            </div>
            <div className="header__search">
                <img src={searchIcon} alt="search icon" width="15px"/>
                <input type="search" placeholder="search" />
            </div>
            <div className="header__icons">
                <HiHome className="header__icon" />
                <RiMessengerLine className="header__icon" />
                <ImCompass2 className="header__icon" />
                <BsHeart className="header__icon" />
                <FaUserCircle className="header__icon" />
            </div>

        </div>
           
    )
}
