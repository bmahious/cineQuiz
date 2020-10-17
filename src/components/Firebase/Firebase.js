import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAZlaSxDLpQ1wfYpGbZUSRHnWq6N45EVPA",
    authDomain: "cine-quiz-e26ee.firebaseapp.com",
    databaseURL: "https://cine-quiz-e26ee.firebaseio.com",
    projectId: "cine-quiz-e26ee",
    storageBucket: "cine-quiz-e26ee.appspot.com",
    messagingSenderId: "294252428240",
    appId: "1:294252428240:web:3e27f03d5b535b5e50d7d5"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // SignUp
    SignUpUser  = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);
    
    // Login
    LoginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    // SignOut
    SignOutUser = () => this.auth.signOut();

    // Reset Password
    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    user = uid => this.db.doc(`users/${uid}`);
}

export default Firebase;