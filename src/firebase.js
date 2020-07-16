import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAxtKQfj4I2AilnkPLT6rYE6o_BCS_YkDQ",
	authDomain: "facebook-messenger-clone-83138.firebaseapp.com",
	databaseURL: "https://facebook-messenger-clone-83138.firebaseio.com",
	projectId: "facebook-messenger-clone-83138",
	storageBucket: "facebook-messenger-clone-83138.appspot.com",
	messagingSenderId: "808195545995",
	appId: "1:808195545995:web:dc6a2ed12c640937efad8e",
	measurementId: "G-DCNSC7FQ9H",
});

const db = firebase.firestore();

export default db;
