import {React, createContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {auth} from '../utils/firebase/indexxx'


const authContext = createContext(null) // !creating a context of user data from database

const AuthProvider = ({children}) => {
const history = useHistory()   
const [user, setuser] = useState()
useEffect(()=>{
    auth.onAuthStateChanged((user) => {
        setuser(user)
    })
}, [])

const logout = () => {
    auth.signOut().then(()=>{
        setuser(null)
        history.push('./login')
    })
} // !logout function
    return (
        <authContext.Provider value={{user, logout}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider
export{authContext}
