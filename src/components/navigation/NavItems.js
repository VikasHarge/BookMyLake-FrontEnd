
import { BiHomeHeart, BiPhotoAlbum, BiMessageAltDetail, BiMoviePlay } from "react-icons/bi";
import { BsPatchCheckFill, BsCartCheck, BsFillPersonFill, BsSearch, BsFillCloudMoonFill } from "react-icons/bs";
import { GiNightSleep, GiFallingStar, GiLovers, GiNestEggs, GiChainedHeart, GiMoonBats, GiStarFormation } from "react-icons/gi";
import { FaCampground } from "react-icons/fa";
import { RiHeartsFill } from "react-icons/ri";
import { WiStars } from "react-icons/wi";

import { Md360 } from "react-icons/md";




export const navMenu = [
    {
        id : 1,
        title : "Home",
        path : "/",
        icon : <BiHomeHeart/>,
        className : "nav_first nav_item"
    },
    {
        id : 2,
        title : "Gallery",
        path : "/gallery",
        icon : <BiPhotoAlbum/>,
        className : "nav_item"
    },
    {
        id : 3,
        title : "Camp Sites",
        path : "/campsites",
        icon : <FaCampground/>,
        className : "nav_item"
    },
    {
        id : 4,
        title : "Blogs",
        path : "./blogs",
        icon : <BiMessageAltDetail/>,
        className : "nav_item"
    },
    {
        id : 5,
        title : "Bookings",
        path : "./bookings",
        icon : <BsCartCheck/>,
        className : "nav_item"
    },
    {
        id : 6,
        title : "Help",
        path : "./help",
        icon : <BsPatchCheckFill/>,
        className : "nav_item"
    },
    {
        id : 7,
        title : "Accout",
        path : "./user",
        icon : <BsFillPersonFill/>,
        className : "nav_item",
        isIcon : true
    },
    {
        id : 8,
        title : "Search",
        path : "./",
        icon : <BsSearch/>,
        className : "nav_last nav_item",
        isIcon : true
    },
]

export const galleryDrop = [
    {
        id : 9, 
        title : "Photo Gallery",
        path : './photos',
        icon : <BiPhotoAlbum/>,
        className : "nav_drop_first nav_drop_item"
    },
    {
        id : 10, 
        title : "Video Gallery",
        path : './videos',
        icon : <BiMoviePlay/>,
        className : "nav_drop_item"
    },
    {
        id : 11, 
        title : "360deg Views",
        path : './vr',
        icon : <Md360/>,
        className : "nav_drop_last nav_drop_item"
    },
]

export const campDrop = [
    {
        id : 13, 
        title : "Camp A - Dreamy Nights",
        path : './campSiteDetails',
        icon : <GiNightSleep/>,
        className : "nav_drop_first nav_drop_item"
    },
    {
        id : 14, 
        title : "Camp B - Stary Sky",
        path : './campSiteDetails',
        icon : <GiFallingStar/>,
        className : "nav_drop_item"
    },
    {
        id : 15, 
        title : "Camp C - Love Nest",
        path : './campSiteDetails',
        icon : <RiHeartsFill/>,
        className : "nav_drop_item"
    },
    {
        id : 16, 
        title : "Camp D - Moon Light",
        path : './campSiteDetails',
        icon : <BsFillCloudMoonFill/>,
        className : "nav_drop_item"
    },
    {
        id : 17, 
        title : "Camp E - Thrilling Night",
        path : './campSiteDetails',
        icon : <GiMoonBats/>,
        className : "nav_drop_last nav_drop_item"
    },
    
]


