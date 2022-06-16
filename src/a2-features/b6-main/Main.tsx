import React, {useEffect} from 'react';
import s from './Main.module.css'
import {PATH} from "../../a1-main/b1-ui/routes/RoutesComponent";
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import {selectIsLogin, SelectUserID} from "../../a1-main/b2-bll/selectors";
import {setIsLoggedIn} from "../../a1-main/b2-bll/loginReducer";

const Main = () => {
    const dispatch = useAppDispatch()
    const loggedIn = useAppSelector(selectIsLogin)
    const userID = useAppSelector(SelectUserID)
    //auth.me ->
    debugger
    useEffect(()=>{
        if(localStorage.getItem('UserInfo')){
            dispatch(setIsLoggedIn(true))
        }
    },[])

    return (
        <div className={s.mainContainer}>
            {loggedIn ? <NavLink to={PATH.PROFILE + `/${userID}`} className={s.link}>click here to continue</NavLink> :
                <NavLink to={PATH.LOGIN} className={s.link}>click here to continue</NavLink>}

        </div>
    );
};

export default Main;