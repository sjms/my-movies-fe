import {Header} from "../components/Header.js";
import {Outlet} from "react-router-dom";
import React  from 'react';



export function RootLayout() {
    // react fragment <>
    return <>
        <Header/>
        <Outlet/>
    </>
}