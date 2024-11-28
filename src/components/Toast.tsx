interface ToastProps {
  title: string;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
}

function Toast({ title, isError, isWarning, isSuccess }: ToastProps) {
  return (
    <div className="toast toast-top toast-end">
      <div
        className={`alert ${
          isError
            ? "alert-error"
            : isWarning
            ? "alert-warning"
            : isSuccess
            ? "alert-success"
            : "alert-info"
        } `}
      >
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Toast;
