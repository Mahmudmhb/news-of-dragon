import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, isLoading] = useState(true);
  const createUser = (email, password) => {
    isLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    isLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    isLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      isLoading(false);
      // console.log(currentUser);
    });
    return () => unSubscribe();
  });

  const authInfo = {
    createUser,
    user,
    signInWithEmail,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
