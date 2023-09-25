import { Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function DirectMessageLayout() {
    return (
        <>
            <Navbar>Navbar</Navbar>
            <Outlet></Outlet>
        </>
    )
}

export default DirectMessageLayout;