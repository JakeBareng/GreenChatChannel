function Message({doc}) {
    return (
        <div>
            {doc.data().text}
        </div>
    )
}

export default Message;