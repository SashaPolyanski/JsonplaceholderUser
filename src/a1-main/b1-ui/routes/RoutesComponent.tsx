import {Route, Routes} from "react-router-dom";
import Login from "../../../a2-features/b1-auth/Login";
import Main from "../../../a2-features/b6-main/Main";
import News from "../../../a2-features/b3-news/News";
import Friends from "../../../a2-features/b4-friends/Friends";
import Profile from "../../../a2-features/b2-profile/Profile";

export const PATH = {
    LOGIN: '/login',
    NEWS: '/news',
    FRIENDS: '/friends',
    PROFILE: '/profile',

}

export const RoutesComponent = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.NEWS} element={<News/>}/>
                <Route path={PATH.FRIENDS} element={<Friends/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
            </Routes>
        </>
    );
};