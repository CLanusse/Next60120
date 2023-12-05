"use client"
import { auth } from "@/firebase/config"
import { signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"


const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const createUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            createUser,
            loginUser,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}