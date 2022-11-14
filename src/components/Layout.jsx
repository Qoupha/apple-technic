import React from "react";
import {Outlet}  from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import "../style.css"
export default function Layout(){
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}