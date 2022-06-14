import {Route, Routes} from "react-router-dom";
import Login from "../../../a2-features/b1-auth/Login";
import Main from "../../../a2-features/b6-main/Main";
import PacksNews from "../../../a2-features/b3-news/PacksNews";
import Friends from "../../../a2-features/b4-friends/Friends";
import Profile from "../../../a2-features/b2-profile/Profile";
import Header from "../../../a2-features/b5-header/Header";
import React from "react";

export const PATH = {
    LOGIN: '/login',
    NEWS: '/news',
    FRIENDS: '/friends',
    PROFILE: '/profile',

}

export const RoutesComponent = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.NEWS} element={<PacksNews/>}/>
                <Route path={PATH.FRIENDS} element={<Friends/>}/>
                <Route path={PATH.PROFILE + '/*'} element={<Profile/>}/>
            </Routes>
        </>
    );
};