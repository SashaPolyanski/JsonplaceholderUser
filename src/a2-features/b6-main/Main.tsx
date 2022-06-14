import React from 'react';
import s from './Main.module.css'
import {PATH} from "../../a1-main/b1-ui/routes/RoutesComponent";
import {NavLink} from 'react-router-dom';
import {useAppSelector} from "../../a1-main/b2-bll/store";
import {selectIsLogin, SelectUserID} from "../../a1-main/b2-bll/selectors";

const Main = () => {
    const loggedIn = useAppSelector(selectIsLogin)
    const userID = useAppSelector(SelectUserID)

    return (
        <div className={s.mainContainer}>
            {loggedIn ? <NavLink to={PATH.PROFILE + `/${userID}`} className={s.link}>click here to continue</NavLink> :
                <NavLink to={PATH.LOGIN} className={s.link}>click here to continue</NavLink>}

        </div>
    );
};

export default Main;