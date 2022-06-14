import React from 'react';
import s from "./News.module.css";
import newsImage from "../../../a3-assets/image/newsImg.png";

type NewsType = {
    title: string
    body: string
}

const News: React.FC<NewsType> = ({title,body}) => {
    return (
        <div className={s.newsContainer}>
            <img src={newsImage} alt=""/>
            <div className={s.newsItemsContainer}>
                <div className={s.title}>{title}</div>
                <div className={s.body}>{body}</div>
            </div>
        </div>
    );
};

export default News;