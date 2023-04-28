import React from "react";
import styles from "./Notification.module.css";

const Notification = (props: {
  author: string;
  authorPicture: string;
  action: string;
  post: string;
  timeAgo: string;
  newNotification: boolean;
  description: string;
  picture: any;
}) => {
  // let classNotif = props.newNotification
  //   ? styles.notification_new
  //   : styles.single_box;
  return (
    <div
      className={`${styles.single_box} ${
        props.newNotification ? [styles.unseen] : ""
      } ${props.picture ? [styles.space_between] : ""}`}
    >
      <div className={styles.left}>
        <div className={styles.avatar}>
          <img
            className={styles.avatarImage}
            src={props.authorPicture}
            alt="authorPicture"
          />
        </div>

        <div className={styles.textBox}>
          <p className={styles.notifi}>
            <span className={styles.name}>{props.author}</span>
            {props.action}
            {props.post === "Chess Club" || (
              <span className={styles.post}>{props.post}</span>
            )}
            {props.post === "Chess Club" && (
              <span className={styles.group}>{props.post}</span>
            )}
            {props.newNotification && <span className={styles.dot}> </span>}
          </p>
          <p className={styles.timeAgo}>{props.timeAgo}</p>

          {props.description && (
            <p className={styles.description}>{props.description}</p>
          )}
        </div>
      </div>

      {props.picture && (
        <div className={styles.img_box}>
          <img src={props.picture} alt="photoNotification" />
        </div>
      )}
    </div>
  );
};

export default Notification;
