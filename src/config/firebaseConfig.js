import * as firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyArw7F7YkF-vmaO1zDv4D9fVPMU_e7nkCw",
    authDomain: "chat-app-b0b13.firebaseapp.com",
    databaseURL: "https://chat-app-b0b13.firebaseio.com",
    projectId: "chat-app-b0b13",
    storageBucket: "chat-app-b0b13.appspot.com",
    messagingSenderId: "915377526560",
    appId: "1:915377526560:web:e0c2d35653e2715a892945"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;