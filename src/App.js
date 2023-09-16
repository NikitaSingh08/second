import React from "react";
import Navbar2 from "./components/Navbar2";
// import Navbar from "./components/Navbar";
import Main from "./Body";
import About from "./components/About";
import Your from "./components/Your";
import { Routes, Route} from "react-router-dom";
import Blogs from "./components/Blogs";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Privatecpt from "./Privatecpt";
import { AppProvider } from "./context";

const App = ()=> {
    return (
        <>
        <Navbar2 />  
        <AppProvider>
          <Routes>
            <Route exact path ="/" element={<Main />} />
            <Route element = {<Privatecpt />}>
            <Route exact path ="/Your" element= {<Your/>} />
            <Route exact path ="/Blogs" element= {<Blogs/>} />
            </Route>
            <Route exact path ="/Categories" element= {<Categories/>} />
            <Route exact path ="/Login" element= {<Login/>} />
            <Route exact path ="/Signup" element= {<Signup/>} />
        </Routes> 
      </AppProvider>
  </>
    ) 
};

export default App;