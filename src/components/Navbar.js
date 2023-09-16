import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
const Navbar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <>

            <nav className="main_nav">
            {/* first logo */}
                <div className="logo">
                    <h2>
                        <span>B</span>ook
                        <span>G</span>eeks
                    </h2>
                </div>
                {/* second logo */}
                <div className="menu_link">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                            
                        </li>
                         
                            {/* <NavLink to="/Categories">Categories</NavLink> */}
                       
                         <Dropdown>
                            {/* <Dropdown.Toggle variant="main_nav">Categories<span class="caret"></span></Dropdown.Toggle> */}
                            <Dropdown.Toggle class="dropdown-toggle" variant="dropdown-toggle text-2xl capitalize text-left" data-toggle="dropdown">
                            Categories
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                Home Page
                             </Dropdown.Item>
                            <Dropdown.Item href="#">
                                  Settings
                            </Dropdown.Item>
                          <Dropdown.Item href="#">
                                  Logout
                          </Dropdown.Item></Dropdown.Menu>
                         </Dropdown>
                         
                        <li><NavLink to="/Blogs">Blogs</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Your">Your</NavLink></li>
                        <li>{auth ? <NavLink onClick={logout} to="/login">Logout</NavLink>:
                        <NavLink to="/Login">Login</NavLink>} </li>
                    </ul>
                </div>
                
            </nav>
        </>
    );
};

export default Navbar;