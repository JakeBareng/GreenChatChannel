import { collection, limit, orderBy, query } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";



function Chat({ db }) {
    const [snapshot, loading, error] = useCollection(
        query(collection(db,"messages"),limit(6),orderBy("timestamp","desc"))
    )

    return (
        <div >
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}
            {snapshot &&  
                snapshot.docs.reverse().map((doc) => {
                    return <Message key={doc.id} doc={doc} />
                })
            }
        </div>
    )
}


export default Chat