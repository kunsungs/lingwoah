import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [pending, setPending] = useState(true);

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
      setPending(false);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn, googlesignIn }}>
      {children}
    </UserContext.Provider>
  );
};
const UserContext = createContext({
  user: null,
  isPending: true,
});

export const UserAuth = () => {
  return useContext(UserContext);
};