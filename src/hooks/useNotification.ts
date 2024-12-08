import { useDispatch } from "react-redux";
import { useEffect, useRef, useCallback } from "react";
import { setNotification } from "../features/game/GameSlice";

interface NotificationOptions {
  isError: boolean;
  message: string;
  duration?: number;
}

function useNotification() {
  const dispatch = useDispatch();
  const timeoutRef = useRef<number | null>(null);

  const showNotification = useCallback(
    ({ isError, message, duration = 3000 }: NotificationOptions) => {
      dispatch(setNotification({ isError, notificationMsg: message }));

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        dispatch(setNotification(null));
        timeoutRef.current = null;
      }, duration);
    },
    [dispatch]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return showNotification;
}

export default useNotification;
