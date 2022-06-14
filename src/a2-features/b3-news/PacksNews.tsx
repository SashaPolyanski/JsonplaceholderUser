import React, {useEffect} from 'react';
import {FetchPostsThunk} from "../../a1-main/b2-bll/newsReducer";
import {useAppDispatch, useAppSelector} from "../../a1-main/b2-bll/store";
import Preloader from "../../a1-main/b1-ui/preloader/Preloader";
import News from "./c1-news/News";
import {selectIsLoading, selectNews} from "../../a1-main/b2-bll/selectors";

const PacksNews = () => {
    const dispatch = useAppDispatch()
    const news = useAppSelector(selectNews)
    const loading = useAppSelector(selectIsLoading)


    useEffect(() => dispatch(FetchPostsThunk()), [])

    if (loading) return <Preloader/>

    return (
        <div>
            {news.map(({id, title, body}) => <News key={id} title={title} body={body}/>)}
        </div>
    );
};

export default PacksNews;