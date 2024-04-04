import React, { createContext, useEffect, useState } from 'react'
import auth from './firebasse';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const authContext = createContext();

const ContextProvider = ({children}) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      if(loggedUser) {
        setUser(loggedUser);
        setLoading(false);
        console.log('logged user: ', user);
      } else {
        setUser(null);
        setLoading(true);
      }
    });

    return () => unsubscribe();
  },[]);

  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  }

  const logOut = () => signOut(auth)

  return (
    <authContext.Provider value={{user, auth, createUser, signIn, logOut, loading}}>
      {children}
    </authContext.Provider>
  )
}

export default ContextProvider