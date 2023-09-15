import { collection, orderBy, query } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";



function Chat({ db }) {
    const [snapshot, loading, error] = useCollection(
        query(collection(db,"messages"),orderBy("timestamp","desc"))
    )

    return (
        <div className="overflow-auto h-100">
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>loading</span>}
            {snapshot &&  
                snapshot.docs.reverse().map((doc) => {
                    return <Message key={doc.id} doc={doc} />
                })
            }
        </div>
    )
}


export default Chat