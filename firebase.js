import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA4req-TbMGu1G7fAYQuFag605MBFQW0KI",
    authDomain: "schedulerexample-a1cb4.firebaseapp.com",
    databaseURL: "https://schedulerexample-a1cb4.firebaseio.com",
    projectId: "schedulerexample-a1cb4",
    storageBucket: "schedulerexample-a1cb4.appspot.com",
    messagingSenderId: "172170649696",
    appId: "1:172170649696:web:37dfba8a1e53ef505be305",
    measurementId: "G-6KC2G1QP2Z"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
