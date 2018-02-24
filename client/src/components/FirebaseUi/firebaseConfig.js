import * as firebase from 'firebase';

const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DB_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_ID,
    messagingSenderId: SENDER_ID
};

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();
export {
    auth,
    db
};