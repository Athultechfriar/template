import React from "react";
import { useState } from "react";
import Icons from "../Icons/Icons";

export const Notifications = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <span role="button" className="NotificationIcon" onClick={showDrawer}>
        {Icons.Notification}
      </span>
    </>
  );
};