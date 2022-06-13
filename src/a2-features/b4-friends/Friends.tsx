import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import {FetchUsersThunk} from "../../a1-main/b2-bll/friendsReducer";

const Friends = () => {
    const users = useAppSelector(state => state.users)
    console.log(users)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(FetchUsersThunk())
    },[])

    return (
        <div>
            {users.map((m)=>{
                return(
                    <div>
                        <div>{m.email}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default Friends;