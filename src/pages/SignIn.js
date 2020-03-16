import React, { useState } from 'react'
import { Link } from "react-router-dom"
import firebase from '../config/firebaseConfig';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        e.preventDfault()
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
    }

    return (
        <>
            <h1>SignIn</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="email"
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                    <div>
                        <button type="submit">ログイン</button>
                    </div>
                </div>
            </form>
            <Link to="/signUp">新規登録</Link>
        </>
    );
}


export default SignIn;