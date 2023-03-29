function Message({doc}) {
    const data = doc.data()
    return (
        <div className="row g-0 border rounded m-2 shadow-sm ">
            <div className="col-2 d-flex justify-content-center align-items-center">            
                <img 
                    className="rounded-circle"
                    width={"50px"}
                    height={"50px"} 
                    src={data.pfp}
                    alt={data.name + " profile"}
                />
            </div>
            <div className="col p-4 d-flex flex-column position-static">
                <div className="fw-bold">
                    {data.name}
                </div>
                <div className="fw-light">
                    {data.text}
                </div>

            </div>
        </div>
    )
}

export default Message;