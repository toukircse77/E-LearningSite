import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, GithubAuthProvider } from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);

 //   create email & password & update details---

 const createUsers = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass)
}
const updateDetails = (userName, updatephoto) => {
    return updateProfile(auth.currentUser, {
        displayName: userName, photoURL: updatephoto
    })
}

 //emailverification

 const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
}

//Log out part
const logOut = () =>{
    return signOut(auth)
}
//email & password  sing In
const userSingInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}


// googlelogin--

const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider)
}
//Github login

const gitHubLogIn = () => {
    return signInWithPopup(auth, githubProvider)
}

useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, user =>{
        setUser(user);

    })
    return () => {
        unSubscribe()
    }
} , [])

const AuthInfo = {createUsers, updateDetails, emailVerification, googleLogIn, userSingInWithEmailPassword, gitHubLogIn, user, logOut}
    return (
        <AuthContext.Provider value={AuthInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;