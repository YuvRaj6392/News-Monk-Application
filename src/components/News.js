import React from 'react'
import NewsItem from './NewsItem'

export default function News() {
  return (
    <div className='container mt-3 my-3'>
    <h2>News Monk Top Headlines</h2>
    <div className="row">
    <div className="col col-md-4" >
    <NewsItem title="Mytitle" description="My desc" />
    </div>
    <div className="col col-md-4" >
    <NewsItem title="Mytitle" description="My desc" />
    </div>
    <div className="col col-md-4" >
    <NewsItem title="Mytitle" description="My desc" />
    </div>
    
    </div>
   
    </div>
  )
}
