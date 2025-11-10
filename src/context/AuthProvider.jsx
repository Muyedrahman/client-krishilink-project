import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


       const createUserWithEmailAndPasswordFunc = (email, password) => {
         return createUserWithEmailAndPassword(auth, email, password);
       };
       const signInWithEmailAndPasswordFunc = (email, password) => {
         return signInWithEmailAndPassword(auth, email, password);
       };

      const signInWithEmailFunc = () => {
            return signInWithPopup(auth, googleProvider);
        };

          const logOutFunc = () => {
            return signOut(auth);
          };


      const sendPassResetEmailFunc = (email) => {
        return sendPasswordResetEmail(auth, email);
      };



    const authInfo = {
      user,
      setUser,
      createUserWithEmailAndPasswordFunc,
      signInWithEmailAndPasswordFunc,
      signInWithEmailFunc,
      logOutFunc,
      sendPassResetEmailFunc,
    };


    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;