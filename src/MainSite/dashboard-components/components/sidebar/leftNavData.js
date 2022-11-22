import {AiFillDashboard} from 'react-icons/ai'
import { FaCampground } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import {IoIosPeople} from 'react-icons/io'
import {RiAdminFill} from 'react-icons/ri'




export const leftNavItemsManagement = [
    {
        heading : "Dashboard",
        path : "dashboard",
        icon : <AiFillDashboard />
    },
    {
        heading : "Camps",
        path : "campSites",
        icon : <FaCampground />
    },
    {
        heading : "Bookings",
        path : "bookings",
        icon : <IoBriefcase />
    },
    {
        heading : "Events",
        path : "events",
        icon : <MdEventAvailable />
    }
]

export const leftNavItemsUser = [

    {
        heading : "Customers",
        path : "customers",
        icon : <IoIosPeople />
    },
    {
        heading : "Admin",
        path : "admin",
        icon : <RiAdminFill />
    },
]