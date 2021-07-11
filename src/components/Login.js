import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom'
import loginContext from './Context';

export default function Login(props) {
    const history =useHistory()
    const context =useContext(loginContext)
    const click = e =>{
        e.preventDefault()
        history.push("/")
        context.isloggedin()
        console.log(context);
    }
    return (
        <div>
            <button type="button" class="btn btn-secondary btn-lg" onClick={click}>Login</button>
        </div>
    )
}

