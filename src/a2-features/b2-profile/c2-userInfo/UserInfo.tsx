import React from 'react';
import s from "../Profile.module.css";

type UserInfoType = {
    title: string
    name: string
}
const UserInfo: React.FC<UserInfoType> = ({name, title}) => {
    return (
        <div>
            <div className={s.userItem}>
                <div className={s.userTitle}>{title}</div>
                <div className={s.userInfo}>{name}</div>
            </div>
        </div>

    );
};

export default UserInfo;