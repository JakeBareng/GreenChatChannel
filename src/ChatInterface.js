import { getAuth, signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
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

function ChatInterface({ db }) {
    const [input, setInput] = useState("");
    async function handleSubmit(message) {
        if (typeof message !== "string" || message.trim() === "" || !getAuth()) return;
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
            console.error('Error writing new message', error);
        }
    }
    function keydownHandler(e) {
        if (e.keyCode === 13) {
            handleSubmit(input)
            setInput("");
        }
    }

    return (
        <>
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
                    handleSubmit(input)
                    setInput("")
                }}>
                    send
                </Button>
            </InputGroup>
        </>
    )
}


export default ChatInterface;