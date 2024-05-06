import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink ></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink ></li>
        {
            user?.email ? <>
                <li><NavLink to="/bookings">My Bookings</NavLink ></li>
                <li><Link ><button onClick={handleLogOut}>Log Out</button></Link ></li>
            </> :
                <li><Link to="/login">Login</Link ></li>
        }
    </>
    return (
        <div className="navbar bg-base-100  items-center mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 md:pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl pl-0 md:pl-4">
                    <img className="w-8/12" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">APPOINTMENT</button>
            </div>
        </div>
    );
};

export default NavBar;