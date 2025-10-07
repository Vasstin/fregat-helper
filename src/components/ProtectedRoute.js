// src/Auth/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase";
import React, { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  if (user === undefined) return null; // пока ждём проверку

  return user ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
