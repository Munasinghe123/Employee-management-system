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
    title: "Add User",
    path: "/user/AddUser",
    icon: <FaIcons.FaRegUser />,
    cName: "nav-text",
  },
  {
    title: "Display Users",
    path: "/user/UserDetails",
    icon: <FaIcons.FaRegFileAlt />,
    cName: "nav-text",
  },

  // enter ur page routes here with titles and icons for it to display on nav bar
  // https://react-icons.github.io/react-icons/icons/fa/ in case need to change icons

  {
    title: "Logout",
    path: "/logout",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];
