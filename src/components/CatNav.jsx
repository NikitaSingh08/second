import React from "react";
import { NavLink, Link } from "react-router-dom";

const CatNav = () => {
    return (
        <>

            <nav className="main_nav">
                {/* second logo */}
                <div className="menu_link">
                    <ul>
                        <li>
                            <Link to="/Fiction" activeClassName="active">Fiction</Link>    
                        </li>
                        <li>
                        <NavLink to="/Mystery">Mystry</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Fantasy">Fantasy</NavLink>
                        </li>
                        <li>
                        <NavLink to="/NonFiction">NonFiction</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Youngad">Youngad</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Romantic">Romantic</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default CatNav;