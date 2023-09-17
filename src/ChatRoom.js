import { getAuth, signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import Chat from "./Chat";
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function signOutUser() {
    signOut(getAuth());
}

function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}

function getUserName() {
    return getAuth().currentUser.displayName;
}

async function handleSubmit(message, db) {
    if (message === "") return;
    if (typeof message !== "string") return;
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

    function keydownHandler(e) {
        if (e.keyCode === 13) {
            handleSubmit(input, db)
            setInput("");
        }
    }

    return (
        <>
            <Chat db={db} />
            <InputGroup className="">
                <Button onClick={signOutUser} className="">Logout</Button>
                <Form.Control
                    type="text"
                    placeholder="Message..."
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                    onKeyDown={keydownHandler}
                    value={input}
                />
                <Button onClick={() => {
                    handleSubmit(input, db)
                    setInput("")
                }}>
                    send
                </Button>
            </InputGroup>
        </>
    )
}


export default ChatRoom;