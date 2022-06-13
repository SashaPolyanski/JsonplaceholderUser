import React from 'react';
import s from './Main.module.css'
import {PATH} from "../../a1-main/b1-ui/routes/RoutesComponent";
import {NavLink} from 'react-router-dom';

const Main = () => {





    return (
        <div className={s.mainContainer}>
            <NavLink to={PATH.LOGIN} className={s.link}>click here to continue</NavLink>
        </div>
    );
};

export default Main;