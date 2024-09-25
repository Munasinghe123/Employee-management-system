import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Add Employee",
    path: "/user/AddUser",
    icon: <FaIcons.FaRegUser />,
    cName: "nav-text",
  },
  {
    title: "Display Employee",
    path: "/user/UserDetails",
    icon: <FaIcons.FaRegFileAlt />,
    cName: "nav-text",
  },
  {
    title: "Calculate OT",
    path: "/user/CalculateOT",
    icon: <FaIcons.FaCommentDollar />,
    cName: "nav-text",
  },
  {
    title: "Contact admin",
    path: "/user/ContactAdmin",
    icon: <FaIcons.FaCommentDollar />,
    cName: "nav-text",
  },


  {
    title: "Logout",
    path: "/logout",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];
