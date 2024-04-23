import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/main";
import Register from "./pages/register/page";
import Login from "./pages/login/page";
import AdminPush from "./pages/admin/push";
import AdminUsers from "./pages/admin/users"
import AdminRoles from "./pages/admin/settingsRoles"
import AdminStory from "./pages/admin/storyActions"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/admin/push"} element={<AdminPush/>}/>
                <Route path={"/admin/users"} element={<AdminUsers/>}/>
                <Route path={"/admin/roles"} element={<AdminRoles/>}/>
                <Route path={"/admin/story"} element={<AdminStory/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
