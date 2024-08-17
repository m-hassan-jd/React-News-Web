import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const MyNewsBoard = ({category}) => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data =>{
            setArticles(data.articles);
        }
        )
    },[category])

  return (
    <>
   <div style={{backgroundColor: 'rgb(219, 252, 255)'}}>
   <h1 className="text-center text-danger fw-5 fs-1">Latest <span>News</span></h1>
    {articles && articles.map((news, index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    })}
   </div>
    </>
  )
}

export default MyNewsBoard

