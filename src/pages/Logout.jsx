
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/ContextAPI";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Logout() {
  const { LogoutUser } = useAuth("");

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  toast.success("Logged out successfully");

  return <Navigate to="/" />;
}
