import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import {FetchUsersThunk} from "../../a1-main/b2-bll/friendsReducer";
import Friend from "./c1-friend/Friend";
import s from './Friends.module.css'
import Preloader from "../../a1-main/b1-ui/preloader/Preloader";
import Login from "../b1-auth/Login";
import {selectIsLoading, selectIsLogin, selectUsers} from "../../a1-main/b2-bll/selectors";

const Friends = () => {
    const users = useAppSelector(selectUsers)
    const loading = useAppSelector(selectIsLoading)
    const login = useAppSelector(selectIsLogin)

    const dispatch = useAppDispatch()
    useEffect(() => dispatch(FetchUsersThunk()), [])


    if (loading) return <Preloader/>
    if (!login) return <Login/>

    return (
        <div className={s.friendsContainer}>
            {users.map(({id, username}) => <Friend key={id} userName={username} userID={id}/>)}
        </div>
    );
};

export default Friends;