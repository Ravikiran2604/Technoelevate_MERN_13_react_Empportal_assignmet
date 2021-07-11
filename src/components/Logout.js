import React from 'react'
import{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import loginContext from './Context'


export default function Logout() {
    const context = useContext(loginContext)
    const history = useHistory()
    context.isloggedin()
    console.log(context);
    history.push('/')
    return (
        <>
            
        </>
    )
}
