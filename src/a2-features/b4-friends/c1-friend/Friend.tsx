import React from 'react';
import s from "./Friend.module.css";
import avatar from '../../../a3-assets/image/defaultAvatar.png'
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../a1-main/b1-ui/routes/RoutesComponent";

type FriendType = {
    userName: string
    userID: number
}
const Friend:React.FC<FriendType> = ({userName, userID}) => {
    const navigate = useNavigate()

    const redirectToCurrentUserHandler = () => {
        navigate(PATH.PROFILE + `/${userID}`)
    }



    return (
        <div>
            <div className={s.usersContainer}>
                <div>
                    <img onClick={redirectToCurrentUserHandler} className={s.userAvatar} src={avatar}/>
                    <div>{userName}</div>
                </div>
            </div>
        </div>
    );
};

export default Friend;