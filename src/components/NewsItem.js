import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='my-3' height='200px'>
      <div className="card" style={{width:'auto'}}>
  <img src={props.url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    
    <p className="card-text">{props.description}</p>
    <p className='card-text'><small className='text-muted'>By {props.author} on {new Date(props.date).toGMTString()} </small></p>
    <a href={props.newsUrl} target="_blank"  rel="noopener noreferrer"  className="btn btn-sm btn-danger">Read More</a>
    
  </div>
</div>
    </div>
  )
}
