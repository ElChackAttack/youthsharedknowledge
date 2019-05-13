import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDzNYdV5Mg6XrPInUatm37_-yYcAyCi8n8",
	authDomain: "solofinalproject.firebaseapp.com",
	databaseURL: "https://solofinalproject.firebaseio.com",
	projectId: "solofinalproject",
	storageBucket: "solofinalproject.appspot.com",
	messagingSenderId: "657644988374",
	appId: "1:657644988374:web:ec48b678f7d45a81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots:true })


export default firebase;