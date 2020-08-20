import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw1rpw12EQb9x15DP-iGPlIxV2F1Iwuu4",
  authDomain: "games-b44b7.firebaseapp.com",
  databaseURL: "https://games-b44b7.firebaseio.com",
  projectId: "games-b44b7",
  storageBucket: "games-b44b7.appspot.com",
  messagingSenderId: "59815415238",
  appId: "1:59815415238:web:93f128b231b82d757f36c7",
  measurementId: "G-4EJNSWY71Z",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("app"));
