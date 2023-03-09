import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignIn from './SignIn';
import ChatRoom from './ChatRoom';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const auth = getAuth(app);
const firestore = firebase.firestore();
const db = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      { user? <ChatRoom db={db}/> : <SignIn auth={auth}/> }
    </div>
  );
}

export default App;
