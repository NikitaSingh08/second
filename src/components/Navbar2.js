import React from 'react';
import {NavLink , useNavigate} from 'react-router-dom';
import Navlinks from './Navlinks';
import Button from './button';
import Logo from './logo';

const Navbar2 = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <nav class='bg-white p-1 py-1 px-50'>
            <div class='bg-white flex item-center font-medium justify-around'>
            <Logo />
            <div>
                <ion-icon name='menu'></ion-icon>
            </div>
            <div>
                 <ul class='bg-white p-1 md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
                 
                    <li class='bg-white'>
                        <NavLink to='/' class='bg-white'>
                            <h1 class='bg-white'>Home</h1>
                        </NavLink>
                    </li>
                    <li>
                      <Navlinks />  
                    </li>
                    <li class='bg-white'>
                      <NavLink to='/Blogs' class='bg-white'>
                       <h1 class='bg-white'>Blogs</h1>
                      </NavLink>  
                    </li>
                    <li class='bg-white'>
                      <NavLink to='/Your' class='bg-white'>
                      <h1 class='bg-white'>Your Section</h1></NavLink>  
                    </li>  
                 </ul>
                 </div>
                 <div class='bg-white p-4'>
                    {/* <Button /> */}
                    <li class='bg-white'>{auth ? <NavLink onClick={logout} to="/login" class='bg-white'><h1 class='bg-white'>Logout</h1></NavLink>:
                        <NavLink to="/Login" class='bg-white'><h1 class='bg-white'>Login</h1></NavLink>} </li>
                 </div>
                 {/* Mobile nav
                 <ul class={'md: hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4'}>
                 
                    <li>
                        <Link to='/' class="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                        <Navlinks />  
                        <div class='py-5'>
                        <Button />
                        </div>
                 </ul> */}
            </div>
        </nav>
    );
};

export default Navbar2;