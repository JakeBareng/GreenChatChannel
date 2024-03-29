import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './SignIn';
import ChatInterface from './ChatInterface';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Chat from './Chat';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="container-fluid container-md p-md-3 h-100 py-3" >
      <div className="card p-2 h-100">
        {user ?
          <>
            <Chat db={db} />
            <ChatInterface db={db} />
          </>

          :
          <>
            <Chat db={db} />
            <SignIn auth={auth} />
          </>
        }
      </div>
    </div>

  );
}

export default App;