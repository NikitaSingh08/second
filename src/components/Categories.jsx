import React from "react";
import CatNav from "./CatNav";
import Fiction from "./Fiction";
import Mystery from "./Mystery";
import Fantasy from "./Fantasy";
import NonFiction from "./NonFiction";
import Youngad from "./Youngad";
import Romance from "./Romance";
import { Routes, Route} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const Categories = () => {
    return (
        <>
        <h2>Hellow</h2>
        <Button className="btn btn-success">Yo</Button>

          {/* <div className="drop">
            <div className="menu-container">
               <div className="dropdown-menu">
                <ul>
                    <DropdownItem text = {"My Profile"}/>
                </ul>
               </div>
            </div>
          </div> */}
            {/* <div>
            <h1>Hola!</h1>
            </div>
            <div>
            <CatNav />
            <Routes>
               <Route exact path ="/Fiction" element={<Fiction />} />
               <Route exact path ="/Mystery" element= {<Mystery/>} />
               <Route exact path ="/Fantasy" element= {<Fantasy/>} />
               <Route exact path ="/NonFiction" element= {<NonFiction/>} />
               <Route exact path ="/Youngad" element= {<Youngad/>} />
               <Route exact path ="/Romance" element= {<Romance/>} />
            </Routes>
            </div> */}
        </>
    )
};

export default Categories;