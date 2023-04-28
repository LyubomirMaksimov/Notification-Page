import React, { useState } from "react";
import styles from "./notificationPanel.module.css";
import Notification from "./Notification";

import MarkPicture from "../assets/images/avatar-mark-webber.webp";
import AngelaPicture from "../assets/images/avatar-angela-gray.webp";
import JacobPicture from "../assets/images/avatar-jacob-thompson.webp";
import RizkyPicture from "../assets/images/avatar-rizky-hasanuddin.webp";
import KimberlyPicture from "../assets/images/avatar-kimberly-smith.webp";
import NathanPicture from "../assets/images/avatar-nathan-peterson.webp";
import AnnaPicture from "../assets/images/avatar-anna-kim.webp";

import imgChess from "../assets/images/image-chess.webp";

const arrayNotifications = [
  {
    index: "1",
    author: "Mark Webber",
    authorPicture: MarkPicture,
    action: "reacted to your recent post",
    post: "My first tournament today!",
    timeAgo: "1m ago",
    newNotification: true,
    description: "",
    picture: "",
  },
  {
    index: "2",
    author: "Angela Gray",
    authorPicture: AngelaPicture,
    action: "followed you",
    post: "",
    timeAgo: "5m ago",
    newNotification: true,
    description: "",
    picture: "",
  },
  {
    index: "3",
    author: "Jacob Thompson",
    authorPicture: JacobPicture,
    action: "has joined your group",
    post: "Chess Club",
    timeAgo: "1 day ago",
    newNotification: true,
    description: "",
    picture: "",
  },
  {
    index: "4",
    author: "Rizky Hasanuddin",
    authorPicture: RizkyPicture,
    action: "sent you a private message",
    post: "",
    timeAgo: "5 day ago",
    newNotification: false,
    description:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    picture: "",
  },
  {
    index: "5",
    author: "Kimberly Smith",
    authorPicture: KimberlyPicture,
    action: "commented on your picture",
    post: "",
    timeAgo: "1 week ago",
    newNotification: false,
    description: "",
    picture: imgChess,
  },
  {
    index: "6",
    author: "Nathan Peterson",
    authorPicture: NathanPicture,
    action: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    timeAgo: "2 weeks ago",
    newNotification: false,
    description: "",
    picture: "",
  },
  {
    index: "7",
    author: "Anna Kim",
    authorPicture: AnnaPicture,
    action: "left the group",
    post: "Chess Club",
    timeAgo: "2 weeks ago",
    newNotification: false,
    description: "",
    picture: "",
  },
];

const NotificationPanel = (props: any) => {
  const [numNotif, setNumNotif] = useState<any>(3);
  const [Notif, setNotif] = useState<any>(arrayNotifications);

  const readAllHandler = () => {
    const arr = Notif.map((item: any) => {
      item.newNotification = false;
      return { ...item };
    });

    setNotif(arr);
    setNumNotif(0);
  };

  return (
    <div className={styles.content}>
      <div className={styles["top-bar"]}>
        <div className={styles["title-container"]}>
          <p className={styles.title}>Notifications</p>
          <p className={styles.num}>{numNotif}</p>
        </div>

        <p className={styles.mark} onClick={readAllHandler}>
          {" "}
          Mark all as read
        </p>
      </div>
      <div>
        {Notif.map((notif: any) => {
          return (
            <Notification
              key={notif.index}
              author={notif.author}
              authorPicture={notif.authorPicture}
              action={notif.action}
              post={notif.post}
              timeAgo={notif.timeAgo}
              newNotification={notif.newNotification}
              description={notif.description}
              picture={notif.picture}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotificationPanel;
