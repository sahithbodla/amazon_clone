import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const signIn = e => {
        e.preventDefault();  //It will help in preventing refresh

        auth.signInWithEmailAndPassword(email,password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))

        // Fancy Firebase login authentication
    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            // it successfully created a new user
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))

        // Fancy Firebase register
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className='login__logo' />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value = {email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className= 'login__registerButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
