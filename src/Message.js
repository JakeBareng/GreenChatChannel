function Message({doc}) {
    const data = doc.data()
    return (
        <div>
            <img src={data.pfp} />
            {data.name}
            {data.text}
        </div>
    )
}

export default Message;