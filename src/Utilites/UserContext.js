import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.init.config';



export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const googleProvider = new GoogleAuthProvider();
    const signInWithPopGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const AuthInfo = { loading, logOut, user, auth, createUser, logIn, signInWithPopGoogle };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser);
            console.log(createUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }

    }, [])

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;