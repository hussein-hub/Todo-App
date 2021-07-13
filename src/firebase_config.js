/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA0RD82lkoim8ZSmC2xSesEgS9sceIxZGc",
    authDomain: "todoapp-782a1.firebaseapp.com",
    projectId: "todoapp-782a1",
    storageBucket: "todoapp-782a1.appspot.com",
    messagingSenderId: "564547116733",
    appId: "1:564547116733:web:1d93e4352108e5c5e1a1d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/

import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA0RD82lkoim8ZSmC2xSesEgS9sceIxZGc",
    authDomain: "todoapp-782a1.firebaseapp.com",
    projectId: "todoapp-782a1",
    storageBucket: "todoapp-782a1.appspot.com",
    messagingSenderId: "564547116733",
    appId: "1:564547116733:web:1d93e4352108e5c5e1a1d4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };