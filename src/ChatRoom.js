import { getAuth, signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import Chat from "./Chat";

function signOutUser() {
    signOut(getAuth());
}

function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}

function getUserName() {
    return getAuth().currentUser.displayName;
}

async function handleEvent(message, db) {
    if (message === "") return;
    const messages = collection(db, "messages");
    try {
        await addDoc(messages, {
            name: getUserName(),
            text: message,
            pfp: getProfilePicUrl(),
            timestamp: serverTimestamp()
        });
    }
    catch (error) {
        console.error('Error writing new message to Firebase Database', error);
    }
}

function ChatRoom({ db }) {
    const [input, setInput] = useState("");
    return (
        <div>
            <Chat db={db}/>
            <input type={"text"} onChange={(e) => {
                setInput(e.target.value)
            }} value={input}></input>

            <button onClick={() => {
                handleEvent(input, db)
                setInput("")
            }}>input</button>
            
        </div>
    )
}


export default ChatRoom;