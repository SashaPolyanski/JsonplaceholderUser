import React from 'react';
import s from './Error.module.css'

const Error = () => {
    return (
        <div className={s.error}>
            Имя пользователя или пароль введены не верно
        </div>
    );
};

export default Error;