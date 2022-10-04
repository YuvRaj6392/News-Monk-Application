import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

export default function News() {
    const [articles,setArticles]=useState("")
    const [page,setPage]=useState(1)
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cc1c8918058e4e4e8fec69abefb33e40&page=${page}`).then(res=>res.json()).then(data=>{
            console.log(data.articles)
            setArticles(data.articles);
        })
    },[page])

    const nextHandler=()=>{
     
        setPage(page+1)
    }
    const previousHandler=(e)=>{
      
        setPage(page-1)
    }

  return (
    
    <div className='container mt-3 my-3'>
    <h2>News Monk Top Headlines</h2>
    <div className="row">
   
    {
     articles && articles.map((element)=>{
        return  <div className="col col-md-4"  key={element.url} >
        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} url={element.urlToImage} newsUrl={element.url} />
                </div>
      })
    }
   

   <div className='d-flex justify-content-between mt-5'>
    <button disabled={page<=1} type="button" class="btn btn-warning"  id='prev' onClick={previousHandler}>Previous</button>
    <button type="button" disabled={page>=4} class="btn btn-warning" id='next' onClick={nextHandler}>Next</button>
   </div>
    
    
    
    </div>
   
    </div>
  )
}
