import React, {useEffect} from 'react';
import {FetchPostsThunk} from "../../a1-main/b2-bll/newsReducer";
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import Preloader from "../../a1-main/b1-ui/preloader/Preloader";

const News = () => {

    const dispatch = useAppDispatch()
    const news = useAppSelector(state=> state.news)
    const loading = useAppSelector(state=>state.app.isLoading)
    useEffect(()=>{
        dispatch(FetchPostsThunk())
    }, [])

if(loading) {
    return <Preloader/>
}
    return (
        <div>
            {news.map((m)=>{
                debugger
                return(
                    <div>
                        <div>{m.title}</div>
                        <div>{m.body}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default News;