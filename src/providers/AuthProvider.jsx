import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);

    // auth initialize
    const auth = getAuth(app);

    // sign up user
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // email sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // update profile
    const profileUpdate = (currentUser, name, photoLink) => {
        // setLoading(true);
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photoLink,
        });
    };

    // change password
    const changePassword = (newPassword) => {
        setLoading(true)
        const user = auth.currentUser;
        return updatePassword(user, newPassword);
    }

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // facebook sign in
    const facebookSignIn = () => {
        setLoading(true);
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubProvider);
    };

    // reset password
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    // log out
    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            setUser(authUser)
            setLoading(true);

            const api = axios.create({
                baseURL: 'https://english-hunter-server-cdso7zr7q-foridislam332.vercel.app',
                // baseURL: 'http://localhost:5000',
            });

            if (authUser?.email) {
                await api.get(`/users/${authUser?.email}`)
                    .then((data) => {
                        if (data.data.email) {
                            setCurrentUser(data.data);
                            setLoading(false);
                        }
                        if (data.data.status === 404) {
                            const user = { name: authUser.displayName, email: authUser.email, role: 'student', photo: authUser.photoURL, status: 'pending' };

                            api.post('/users', user)
                                .then(() => {
                                    setLoading(false);
                                })
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                        setLoading(false);
                    });
            }

            if (authUser === null) {
                setCurrentUser({})
                setLoading(false);
            }

            if (authUser) {
                api.post('/jwt', { email: authUser.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        });

        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        setLoading,
        currentUser,
        signUpUser,
        signIn,
        profileUpdate,
        googleSignIn,
        facebookSignIn,
        resetPassword,
        logOut,
        changePassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;