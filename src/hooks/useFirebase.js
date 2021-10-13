import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signOut, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user.displayName);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            });
    };

    const githubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user.displayName);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            });
    };

    const fbSignIn = () => {
        signInWithPopup(auth, fbProvider)
            .then(result => {
                console.log(result.user.displayName);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            });
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                console.log('Log out successful');

            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            });
    };


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
        });
    });

    const getEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    };

    const getPassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (auth, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(email, password);
                console.log(result.user);
                setUser(user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return {
        logOut,
        fbSignIn,
        githubSignIn,
        googleSignIn,
        getEmail,
        getPassword,
        handleLogin,
        user

    }

}

export default useFirebase;