import React, {useEffect} from 'react';
import {FetchPostsThunk} from "../../a1-main/b2-bll/newsReducer";
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import Preloader from "../../a1-main/b1-ui/preloader/Preloader";
import News from "./c1-news/News";

const PacksNews = () => {

    const dispatch = useAppDispatch()
    const news = useAppSelector(state => state.news)
    const loading = useAppSelector(state => state.app.loadingApp)
    useEffect(() => {
        dispatch(FetchPostsThunk())
    }, [])

    if (loading) {
        return <Preloader/>
    }
    return (
        <div>
            {news.map((news) => {
                return (
                   <News key={news.id} title={news.title} body={news.body} />
                )
            })}
        </div>
    );
};

export default PacksNews;