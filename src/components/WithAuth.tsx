import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext"; // Path to your UserContext
import { useEffect } from "react";
import Loading from "./Loading";

const withAuth = (WrappedComponent: React.FC) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const { isLoggedIn, emailVerified, loading } = useUser();

    useEffect(() => {
      if (!loading) {
        if (!isLoggedIn) {
          router.replace("/login");
        } else if (!emailVerified) {
          router.replace("/verify-email");
        }
      }
    }, [isLoggedIn, emailVerified, loading, router]);

    if (loading || !isLoggedIn || !emailVerified) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
