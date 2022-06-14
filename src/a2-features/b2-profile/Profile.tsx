import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {PATH} from "../../a1-main/b1-ui/routes/RoutesComponent";
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import defaultAvatar from '../../a3-assets/image/defaultAvatar.png'
import s from './Profile.module.css'
import {FetchCurrentUserThunk} from "../../a1-main/b2-bll/profileReducer";
import Preloader from "../../a1-main/b1-ui/preloader/Preloader";

const Profile = () => {
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(state => state.profile.user)

    const params = useParams<'*'>()
    const token = params['*'] as string

    useEffect(()=>{
        debugger
        dispatch(FetchCurrentUserThunk(+token))
    }, [])

    console.log(token)

    if (!currentUser) return <Preloader/>

    return (
        <div>

            <NavLink to={PATH.FRIENDS}>go to friends</NavLink>
            <div><img className={s.userAvatar} src={defaultAvatar} alt=""/></div>
            <div>{currentUser.username}</div>
            <div>{currentUser.name}</div>
            <div>{currentUser.email}</div>
            <div>{currentUser.phone}</div>
            <div>{currentUser.website}</div>
            <div>{currentUser.address.city}</div>
            <div>{currentUser.address.street}</div>
            <div>{currentUser.company.name}</div>
        </div>
    );
};

export default Profile;