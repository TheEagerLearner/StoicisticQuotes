import React, { useEffect, useState }  from "react";
import axios from "./api/axios";

export default function App(){

  const getQuote = ()=>{
    axios.get("/stoic-quote")
    .then(
      docs=>{
        console.log(docs.data)
        setQuoteData(docs.data)
      }
    )
    .catch(err=>{
      console.log(err)
    })
  }

  const [quoteData,setQuoteData] = useState({quote:"",author:""});

  useEffect(()=>{
    getQuote();
  },[]);

  return(
      <div className="bg-black h-screen flex flex-col items-center justify-center px-10">
        <h1 className="text-center text-4xl text-white">
        {quoteData.quote}
        </h1>
        <h1 className="pt-4 text-white"><strong>{quoteData.author}</strong></h1>
        <button onClick={getQuote} className="text-white pt-6 p-10 text-3xl">↻</button>
        <a className=" absolute bottom-2 text-white hover:text-xl" href="https://github.com/TheEagerLearner"><h1>@TheEagerLearner</h1></a>
      </div>
  )

}