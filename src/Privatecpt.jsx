import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const Privatecpt = () => {
    const auth = localStorage.getItem("user");
    return auth ?<Outlet />:<Navigate to = "Login" />
}

export default Privatecpt;