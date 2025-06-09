import React from 'react'

const NewsItem =(props)=> {
    let {title,description,imageUrl,newsUrl,date}=props;
    return (
      <div className="my-3">
       <div className="card">
        <img src={!imageUrl?"https://s.yimg.com/ny/api/res/1.2/m3YF44w.lwuqUAGamwQV_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/3fd19b7b0bbbffedba8953a9d25adc9b":imageUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body-secondary">Last updated on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
       </div>
      </div>
    )
  }

export default NewsItem
