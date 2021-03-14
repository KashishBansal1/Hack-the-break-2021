//---------------------------------------------------------------------
// FIREBASE PROJECT INTEGRATION
//---------------------------------------------------------------------

var firebaseConfig = {
    apiKey: "AIzaSyAISRhMVMiDDzm0KHufjBVPq75vAv9-5uE",
    authDomain: "hackthebreak2021team26.firebaseapp.com",
    projectId: "hackthebreak2021team26",
    storageBucket: "hackthebreak2021team26.appspot.com",
    messagingSenderId: "433445464303",
    appId: "1:433445464303:web:8bc02decb563121f47d31a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
var db = firebase.firestore();
var docRef = db.collection("RegisteredUsers");