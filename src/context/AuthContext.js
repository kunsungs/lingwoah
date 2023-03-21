import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }
    
   const googlesignIn = (email, password) => {
    return signInWithPopup(auth, googleProvider);
   }

  const logout = () => {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    createUser,
    signIn,
    user,
    logout,
    googlesignIn,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};


export const UserAuth = () => {
  return useContext(UserContext);
};