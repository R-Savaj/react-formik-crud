import React from "react";
import { NavLink } from 'react-router-dom';
const Nav = ()=>{
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">List</NavLink>
                <NavLink to="/shop" className="nav-item nav-link">Users</NavLink>
            </div>
        </nav>
    );
}

export default Nav;