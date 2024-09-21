import { ToastProvider } from "./ToastContext";
import { UserProvider } from "./UserContext";
import { VisibleIconProvider } from "./VisibleIconContext";

export const ProviderWrapper = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <UserProvider>
      <ToastProvider>
        <VisibleIconProvider>{children}</VisibleIconProvider>
      </ToastProvider>
    </UserProvider>
  );
};
