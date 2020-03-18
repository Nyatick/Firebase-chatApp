import React, { useState } from 'react'
import { Link } from "react-router-dom"
import firebase from '../config/firebaseConfig';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('User Created')
            })
            .catch(err => {
                console.log("err");

            })
    }

    return (
        <div class="wraper">
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
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
                </div>
                <div>
                    <input placeholder="name"></input>
                </div>
                <div>
                    <button type="submit">新規登録</button>
                </div>
            </form>
            <Link to="/signIn">ログイン</Link>
        </div>
    );
}

export default SignUp;