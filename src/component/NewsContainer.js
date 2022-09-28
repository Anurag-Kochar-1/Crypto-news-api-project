import React from 'react'
import News from './News'
import {useEffect, useState} from "react"
import axios from "axios";

const EMOJI_OPTIONS = [
    '😀',
    '🤠',
    '😎',
    '👽',
    '🙈'

]


const options = {
  method: 'GET',
  url: 'https://crypto-news-live3.p.e.com/news',
  headers: {
    'X-RapidAPI-Key': 'e',
    'X-RapidAPI-Host': 'crypto-news-live3.p.e.com'
  }
};


function NewsContainer(props) {

    const [news, setNews] = useState([{}])
    const[count, setCount] = useState(0)

    function addCount () {
        setCount(count+1)
    }

    function callingAPI () {
        axios.request(options).then(function (response) {
            console.log(response.data[0].url);
             
        }).catch(function (error) {
            console.error(error);
        });
    }

    let API = `https://crypto-news-live3.p.rapidapi.com/news`

     const fetchApiData = async (url) => {
        try {
            const a = Math.floor(Math.random() * (92 - 1)) + 1;
            const resp = await fetch(url,options)
            const data = await resp.json()
            console.log(data); 

            setNews([...news, {title: data[a].title , url: data[a].url}])   

        } catch (error) {
            console.log(error);
        }
     }

    useEffect(() => {
        // callingAPI()

        fetchApiData(API)
    },[props.secondCount])


    
    
    

  return (
    <div className='container'>   
        
       {news.map((ne,index) => {
        return <News key={index} title={ne.title} url={ne.url} />
       })}

    </div>
  )
}

export default NewsContainer
