import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import {FetchUsersThunk} from "../../a1-main/b2-bll/friendsReducer";
import Friend from "./c1-friend/Friend";
import s from './Friends.module.css'
import Preloader from "../../a1-main/b1-ui/preloader/Preloader";

const Friends = () => {
    const users = useAppSelector(state => state.users)
    const loading = useAppSelector(state => state.app.loadingApp)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(FetchUsersThunk())
    }, [])


    if(loading) {
        return <Preloader/>
    }
    return (
        <div className={s.friendsContainer}>
            {users.map((m) => {
                return (
                    <Friend
                        key={m.id}
                        userName={m.username}
                        userID={m.id}
                    />
                )
            })}
        </div>
    );
};

export default Friends;