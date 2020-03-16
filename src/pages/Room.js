import React from 'react'
import firebase from '../config/firebaseConfig';

const Room = ({ user }) => {
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            console.log("SignOut");
        })
            .catch((error) => {
                console.log("err");

            })
    }
    return (
        <>
            <h1>Room</h1>
            <button onClick={handleSignOut}></button>
        </>
    );
}

export default Room;