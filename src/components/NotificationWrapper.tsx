import { useGameState } from "../hooks/useAppSelector";
import Toast from "../components/Toast";

interface NotificationWrapperProps {
  children: React.ReactNode;
}

const NotificationWrapper: React.FC<NotificationWrapperProps> = ({
  children,
}) => {
  const { notification } = useGameState();

  return (
    <>
      {notification && (
        <div className="fixed top-4 right-4 z-50">
          <Toast
            isError={notification.isError}
            title={notification.notificationMsg}
          />
        </div>
      )}
      {children}
    </>
  );
};

export default NotificationWrapper;
