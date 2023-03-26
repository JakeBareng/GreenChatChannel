function Message({doc}) {
    const data = doc.data()
    return (
        <div className="row g-0 border rounded mb-4 shadow-sm ">
            <div className="col-3 d-flex justify-content-center">            
                <img 
                    className="rounded-circle " 
                    src={data.pfp}
                />
            </div>
            <div className="col p-4 d-flex flex-column position-static">
                <div>
                    {data.name}
                </div>
                <div>
                    {data.text}
                </div>

            </div>
        </div>
    )
}

export default Message;