import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="navbar bg-primary text-primary-content">
            <button className="btn btn-ghost text-xl">daisyUI</button>
            <Link className="btn btn-ghost text-xl" to="/">Home</Link>
            <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
            <Link className="btn btn-ghost text-xl" to="/register">Register</Link>
            <Link className="btn btn-ghost text-xl" to="/orders">Orders</Link>
            {
                user && <Link className="btn btn-ghost text-xl" to="/profile">Profile</Link>
            }

            {
                user ? <div>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-xs ml-2">Sign Out</button>
                </div> : <Link to="/login">Login</Link>
            }
        </div>
    );
};

export default Header;