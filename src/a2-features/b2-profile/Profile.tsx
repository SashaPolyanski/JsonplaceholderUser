import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import defaultAvatar from '../../a3-assets/image/defaultAvatar.png'
import s from './Profile.module.css'
import {FetchCurrentUserPostsThunk, FetchCurrentUserThunk} from "../../a1-main/b2-bll/profileReducer";
import Preloader from "../../a1-main/b1-ui/preloader/Preloader";
import UserPosts from "./c1-userPosts/UserPosts";
import {selectCurrentUser, selectIsLoading, selectIsLogin, selectPostsUser} from "../../a1-main/b2-bll/selectors";
import UserInfo from "./c2-userInfo/UserInfo";
import {PATH} from "../../a1-main/b1-ui/routes/RoutesComponent";
import {setIsLoggedIn} from "../../a1-main/b2-bll/loginReducer";

const Profile = () => {
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(selectCurrentUser)
    const navigate = useNavigate()
    const postsUser = useAppSelector(selectPostsUser)
    const login = useAppSelector(selectIsLogin)
    const loading = useAppSelector(selectIsLoading)
    const params = useParams<'*'>()
    const token = params['*'] as string

    useEffect(() => {
        dispatch(FetchCurrentUserThunk(+token))
        dispatch(FetchCurrentUserPostsThunk(+token))
    }, [token])

    //auth.me ->
    useEffect(()=>{
        if(localStorage.getItem('UserInfo')){
            dispatch(setIsLoggedIn(true))
        }
    },[])
    if (!currentUser || loading) return <Preloader/>
    if (!login) navigate(PATH.LOGIN)


    return (
        <div>
            <div className={s.userInfoContainer}>
                <div>
                    <div><img className={s.userAvatar} src={defaultAvatar} alt=""/></div>
                    <div className={s.userName}>{currentUser.username}</div>
                </div>
                <div>
                    <UserInfo title={'Name:'} name={currentUser.name}/>
                    <UserInfo title={'Email:'} name={currentUser.email}/>
                    <UserInfo title={'Phone:'} name={currentUser.phone}/>
                    <div className={s.userItem}>
                        <div className={s.userTitle}>My Web-Site:</div>
                        <a className={s.userInfo} href={currentUser.website}> {currentUser.website}</a></div>
                    <UserInfo title={'City:'} name={currentUser.address.city}/>
                    <UserInfo title={'Street:'} name={currentUser.address.street}/>
                    <UserInfo title={'Company name:'} name={currentUser.company.name}/>
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