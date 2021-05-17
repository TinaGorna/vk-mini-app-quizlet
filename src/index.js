import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCu8R59Hpt5zkLHJGW-Z89KW6YcIdiw-XM",
    authDomain: "quizlet-d176f.firebaseapp.com",
    databaseURL: "https://quizlet-d176f-default-rtdb.firebaseio.com",
    projectId: "quizlet-d176f",
    storageBucket: "quizlet-d176f.appspot.com",
    messagingSenderId: "776262906158",
    appId: "1:776262906158:web:585dbb675327bcde9ecabf",
    measurementId: "G-K5XJF9ETWT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/*// Init VK  Mini App
bridge.send("VKWebAppInit");*/



ReactDOM.render(<App/>, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
    import("./eruda").then(({default: eruda}) => {
    }); //runtime download
}
