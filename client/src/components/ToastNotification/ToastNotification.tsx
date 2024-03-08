import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ToastNotification.module.scss";
import Button from "../Button/Button";
import { useState } from "react";

interface ToastNotificationProps {
  message: string | null;
  variant: string | null;
  onClose: () => any;
}

const ToastNotification = ({
  message,
  variant,
  onClose,
}: ToastNotificationProps) => {
  const [contentStyles, setContentStyles] = useState(" ");
  if (variant === "success") {
    setContentStyles("styles.success");
  } else if (variant === "error") {
    setContentStyles("styles.error");
  }

  const classList = [styles.toastContent, contentStyles];
  return (
    <>
      <div className={styles.toastWrapper} data-testid="toastWrapper">
        <div className={styles.toastBox} data-testid="toastBox">
          <div className={classList.join(" ")} data-testid="toastContent">
            <p>{message}</p>
            <Button handleClick={onClose} data-testid="toastClose">
              <FontAwesomeIcon
                className="h-6 w-6 text-gray-500 hover:text-white"
                icon={faXmark}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToastNotification;
