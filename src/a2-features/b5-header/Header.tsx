import Button from '@mui/material/Button/Button';
import React from 'react';
import s from './Header.module.css'

const Header = () => {
    const logoutHandler = () => {
        localStorage.clear()
    }

    return (
        <header className={s.header}>
            <img
                src="https://i.pinimg.com/originals/1a/ae/b9/1aaeb92db944020a324c1b1d5bdd1522.gif"
                alt="#"/>
            <Button variant={"contained"} className={s.btn}>Login</Button>
            <Button variant={"contained"} className={s.btn} onClick={logoutHandler}>Logout</Button>
        </header>
    );
};

export default Header;