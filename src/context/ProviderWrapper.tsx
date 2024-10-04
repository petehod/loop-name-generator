import { DateProvider } from "./DateContext";
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
        <VisibleIconProvider>
          <DateProvider>{children}</DateProvider>
        </VisibleIconProvider>
      </ToastProvider>
    </UserProvider>
  );
};
