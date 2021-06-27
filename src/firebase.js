import firebase from "firebase"
import "firebase/auth";

const firebaseConfig = {
   // FirebaseConfig for Authentication
     apiKey: "AIzaSyBBWlwi-Bk-jXwDiJPWn8Mkkt1VR3l22To",
     authDomain: "smallapp333.firebaseapp.com",
     projectId: "smallapp333",
     storageBucket: "smallapp333.appspot.com",
     messagingSenderId: "1040873154084",
     appId: "1:1040873154084:web:aae016fee4ad2ab5d21ab1"

}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth()
export default firebase;
