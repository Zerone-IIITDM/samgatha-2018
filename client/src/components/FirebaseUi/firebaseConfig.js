import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDgCSvdEiNVgOf34wuG0rqNzPmZsegL8jc",
    authDomain: "samgatha-prod-2018.firebaseapp.com",
    databaseURL: "https://samgatha-prod-2018.firebaseio.com",
    projectId: "samgatha-prod-2018",
    storageBucket: "samgatha-prod-2018.appspot.com",
    messagingSenderId: "171876579576"
};

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();
export {
    auth,
    db
};