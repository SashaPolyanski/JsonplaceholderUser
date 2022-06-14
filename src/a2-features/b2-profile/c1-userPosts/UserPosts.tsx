import React from 'react';
import s from "./UserPosts.module.css";

type UserPostsType = {
    title: string
    body: string
}

const UserPosts: React.FC<UserPostsType> = ({title, body}) => {
    return (
        <div className={s.postsContainer}>
            <div className={s.postTitle}>{title}</div>
            <div className={s.postText}>{body}</div>
        </div>
    );
};

export default UserPosts;