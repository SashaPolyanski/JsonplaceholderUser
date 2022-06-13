import Button from '@mui/material/Button/Button';
import React from 'react';
import s from './Header.module.css'
import {useNavigate} from "react-router-dom";
import {PATH} from "../../a1-main/b1-ui/routes/RoutesComponent";
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import {setIsLoggedIn} from "../../a1-main/b2-bll/loginReducer";

const Header = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLogin)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const logoutHandler = () => {
        localStorage.removeItem('UserInfo')
        navigate(PATH.LOGIN)
        dispatch(setIsLoggedIn(false))

    }
    const loginHandler = () => {
        navigate(PATH.LOGIN)
    }


    return (
        <header className={s.header}>
            <img
                src="https://i.pinimg.com/originals/1a/ae/b9/1aaeb92db944020a324c1b1d5bdd1522.gif"
                alt="#"/>
            {isLoggedIn ?
                <Button variant={"contained"} className={s.btn} onClick={logoutHandler}>Logout</Button>
                :
                <Button variant={"contained"} className={s.btn} onClick={loginHandler}>Login</Button>

            }


        </header>
    );
};

export default Header;