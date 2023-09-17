import { collection, orderBy, query } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { getAuth } from "firebase/auth";



function Chat({ db }) {
    console.log(getAuth());
    const [snapshot, loading, error] = useCollection(
        query(collection(db,"messages"),orderBy("timestamp","desc"))
    )

    return (
        <div className="overflow-auto" style={{display: 'flex', flexDirection: 'column-reverse'}}>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>loading</span>}
            {snapshot &&  
                snapshot.docs.map((doc) => {
                    return <Message key={doc.id} doc={doc} />
                })
            }
        </div>
    )
}


export default Chat