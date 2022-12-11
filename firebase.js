// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD__Rd21-4riiL86bvFE2MZmVU8x4GYVtQ",
  authDomain: "fir-auth-491fd.firebaseapp.com",
  projectId: "fir-auth-491fd",
  storageBucket: "fir-auth-491fd.appspot.com",
  messagingSenderId: "850881563357",
  appId: "1:850881563357:web:cfe940322f293c0c376934"
};

// Initialize Firebase
let app;
if(firebase.apps.length ===  0){
    app=firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app()
}
const auth=firebase.auth()
export{auth};