import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const existingUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const observingUser = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => observingUser();
    }, []);

    const authInformation = {
        createUser,
        existingUser,
        updateUser,
        providerLogin,
        logOut,
        user,
        loading,
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
