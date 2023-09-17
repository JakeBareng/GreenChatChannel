function Message({doc}) {
    const data = doc.data()
    return (
        <div className="row border rounded m-1 shadow-sm p-1">
            <div className="col-3 col-sm-2 d-flex justify-content-center ">            
                <img 
                    className="rounded-circle"
                    width={"50px"}
                    height={"50px"} 
                    src={data.pfp}
                    alt={data.name + " profile"}
                />
            </div>
            <div className="col p-2">
                <div className="row fw-bold">
                    {data.name}
                </div>
                <div className="row text-break">
                    {data.text}
                </div>
            </div>
        </div>
    )
}

export default Message;