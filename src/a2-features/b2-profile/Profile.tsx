import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import defaultAvatar from '../../a3-assets/image/defaultAvatar.png'
import s from './Profile.module.css'
import {FetchCurrentUserPostsThunk, FetchCurrentUserThunk} from "../../a1-main/b2-bll/profileReducer";
import Preloader from "../../a1-main/b1-ui/preloader/Preloader";
import Login from "../b1-auth/Login";
import UserPosts from "./c1-userPosts/UserPosts";

const Profile = () => {
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(state => state.profile.user)
    const postsUser = useAppSelector(state => state.profile.posts)
    const login = useAppSelector(state => state.auth.isLogin)
    const loading = useAppSelector(state => state.app.loadingApp)
    const params = useParams<'*'>()
    const token = params['*'] as string

    useEffect(() => {
        dispatch(FetchCurrentUserThunk(+token))
        dispatch(FetchCurrentUserPostsThunk(+token))
    }, [token])

    if (!currentUser) return <Preloader/>
    if (!login) return <Login/>
    if (loading) return <Preloader/>

    return (
        <div>
            <div className={s.userInfoContainer}>
                <div>
                    <div><img className={s.userAvatar} src={defaultAvatar} alt=""/></div>
                    <div className={s.userName}>{currentUser.username}</div>
                </div>
                <div>
                    <div className={s.userItem}>
                        <div className={s.userTitle}>Name:</div>
                        <div className={s.userInfo}>{currentUser.name}</div>
                    </div>
                    <div className={s.userItem}>
                        <div className={s.userTitle}>Email:</div>
                        <div className={s.userInfo}>{currentUser.email}</div>
                    </div>
                    <div className={s.userItem}>
                        <div className={s.userTitle}>Phone:</div>
                        <div className={s.userInfo}>{currentUser.phone}</div>
                    </div>
                    <div className={s.userItem}>
                        <div className={s.userTitle}>My Web-Site:</div>
                        <a className={s.userInfo} href={currentUser.website}> {currentUser.website}</a></div>
                    <div className={s.userItem}>
                        <div className={s.userTitle}>City:</div>
                        <div className={s.userInfo}>{currentUser.address.city}</div>
                    </div>
                    <div className={s.userItem}>
                        <div className={s.userTitle}>Street:</div>
                        <div className={s.userInfo}>{currentUser.address.street}</div>
                    </div>
                    <div className={s.userItem}>
                        <div className={s.userTitle}>Company name:</div>
                        <div className={s.userInfo}> {currentUser.company.name}</div>
                    </div>
                </div>
            </div>
            <div className={s.postsTitleContainer}>
                <div className={s.postsTitle}>Title</div>
                <div className={s.postsPost}>Post</div>
            </div>
            {postsUser.map(post => {
                return (
                    <div>
                        <UserPosts key={post.id} title={post.title} body={post.body}/>
                    </div>
                )
            })}

        </div>
    );
};

export default Profile;