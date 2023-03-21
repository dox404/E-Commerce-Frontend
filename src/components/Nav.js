import React from 'react';
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('user')
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }
    return (
        <div className="nav-ul">
        {/* <a href={process.env.REACT_APP_BASE_URL}> */}
            <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-Logo-2007.png" alt="logo" className='logo' />
            {/* </a> */}
            {token ? <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">LogOut ({JSON.parse(token).name})</Link></li>
                {/* <li>{ token ? <Link onClick={logout} to="/signup">LogOut</Link> : <Link to="/signup">Sign Up</Link>}</li> */}
                {/* <li><Link to="/login">Log In</Link></li> */}
                {/* {
                    token ? <li><Link onClick={logout} to="/signup">LogOut</Link></li>
                        :<>
                            <li> <Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                        </>
                } */}
            </ul> :
            
                <ul>
                
                    <li> <Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                </ul>
                
            }
        </div>
    )
}
export default Nav