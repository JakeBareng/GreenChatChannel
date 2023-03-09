import { collection, getDoc, query } from "firebase/firestore"
import React, { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";


function Chat({ db }) {
    const [snapshot, loading, error] = useCollection(
        collection(db, "messages"),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )

    return (
        <div id="chat-container">
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}
            {snapshot && 
                snapshot.docs.map((doc) => {
                    return <Message key={doc.id} doc={doc} />
                })
            }
        </div>
    )
}


export default Chat