import { useState } from "react";

function ProfileWeb() {
  const [open, setOpen] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  const handleToggle = () => {

  }

  return (
    <>
      
  </>

  );
};
export default ProfileWeb;