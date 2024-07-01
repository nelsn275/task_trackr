import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password) // logs the user in to their account (in firebase)
        // may fail with error. handle when calling `signIn`
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signIn,
        signup
    }

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}
