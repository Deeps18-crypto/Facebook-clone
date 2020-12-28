import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcons from "@material-ui/icons/EmojiFlags";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src="https://scontent.fmaa2-2.fna.fbcdn.net/v/t1.0-0/s600x600/118727437_254992672579061_2855536199369752456_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=274qvZV9POEAX849beQ&_nc_ht=scontent.fmaa2-2.fna&tp=7&oh=3f2121fd1fe5e8fde9ecbf449bf58b99&oe=600E5C6E."></SidebarRow>
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID 19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcons} title="Pages" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
