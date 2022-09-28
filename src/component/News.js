import React from 'react'
import "../App.css"


function News(props) {

  return (
    <div className={props.title && props.url && 'news-container'  }>
        
    <p> {props.title} </p>

   {props.title &&  <button className='readMoreBtn' > <a className='readMoreAtag' href={props.url} target="_blank"> Read more </a> </button>}
    

    

    </div>
  )
}

export default News