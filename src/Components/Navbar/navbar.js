//------------------------------ importing required libaries ------------------------//
import { Link, Outlet } from "react-router-dom";
import Style from "./navbar.module.css";


//------------------------------ Navbar function ------------------------------------//
function Navbar() {


    return (
        <>
            <div className={Style.navbar}>
                <div className={Style.left}>
                    <Link className={Style.title} to="/">Contact List</Link>
                </div>
                <div className={Style.right}>
                    <Link to="/">Contact List</Link>
                    <Link to="/add">Add Contact ➕</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

//---------------------------- default exportor function ---------------------------//
export default Navbar;