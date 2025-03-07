import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import nookies from "nookies";

const AuthWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cookies = nookies.get();
  const jwt = cookies?.jwt;

  useEffect(() => {
    if (jwt) {
      if (location.pathname === "/auth") {
        navigate("/");
      }
    } else if (location.pathname !== "/auth") {
      navigate("/auth");
    }
  }, [jwt, location.pathname, navigate]);
};

export default AuthWrapper;
