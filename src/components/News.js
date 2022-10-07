import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default function News({apiKey,country,category}) {
    const [articles,setArticles]=useState("")
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
      const cat=category.toUpperCase();
      document.title=`${cat} - NewsMonk`
      window.scrollTo(0, 0)
      setLoading(true)
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=100`).then(res=>res.json()).then(data=>{
          setLoading(false)
            console.log(data.articles)
            setArticles(data.articles);
        })
    },[category])

    // const nextHandler=()=>{
    //   window.scrollTo(0, 0)
    //     setPage(page+1)
    // }
    const previousHandler=(e)=>{
      window.scrollTo(0, 0)
       
    }

  return (
    
    <div className='container mt-5 my-3'>
    <h2 className='text-center mt-5' >News Monk Top Headlines</h2>
    {loading && <Spinner /> }
    <div className="row">
   
    {
     articles && articles.map((element)=>{
        return  <div className="col col-md-4"  key={element.url} >
        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} url={element.urlToImage} newsUrl={element.url} author={!element.author?"Unknown":element.author} date={element.publishedAt} />
                </div>
      })
    }
   

   <div className='d-flex justify-content-between mt-5'>
   <button  type="button" class="btn btn-warning"  id='prev' onClick={previousHandler}>Go at top</button>
    {/* <button disabled={page<=1} type="button" class="btn btn-warning"  id='prev' onClick={previousHandler}>Previous</button> */}
    {/* <button type="button"  class="btn btn-warning" id='next' onClick={nextHandler}>Next</button> */}
   </div>
    
    
    
    </div>
   
    </div>
  )
}
