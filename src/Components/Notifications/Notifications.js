import { useState, useEffect } from "react";
import { getFirebaseToken, onForegroundMessage } from "../../Firebase";
import ToastNotification from "./ToastNotification";

const Notifications = () => {
  const [showNotificationBanner, setShowNotificationBanner] = useState(
    Notification.permission === "default"
  );
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  onForegroundMessage()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  const handleGetFirebaseToken = () => {
    getFirebaseToken()
      .then((firebaseToken) => {
        console.log("Firebase token: ", firebaseToken);
        if (firebaseToken) {
          setShowNotificationBanner(false);
        }
      })
      .catch((err) =>
        console.error("An error occured while retrieving firebase token. ", err)
      );
  };

  return (
    <div className="app">
      {showNotificationBanner && (
        <div className="notification-banner">
          <span>The app needs permission to</span>
          <button
            className="notification-banner-link"
            onClick={handleGetFirebaseToken}
          >
            enable push notifications.
          </button>
        </div>
      )}
      {show ? (
        <ToastNotification
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Notifications;
