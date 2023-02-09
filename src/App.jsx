import React, { useEffect, useState }  from "react";
import axios from "./api/axios";

export default function App(){

  const [quoteData,setQuoteData] = useState({quote:"",anime:"",character:""});

  useEffect(()=>{
    axios.get("/random")
    .then(
      docs=>{
        console.log(docs.data)
        setQuoteData(docs.data)
      }
    )
    .catch(err=>{
      console.log(err)
    })
  },[]);

  return(
    <div>
      <h1>
      {quoteData.quote}
      </h1>
      <h1>{quoteData.anime}</h1>
      <h1>{quoteData.character}</h1>
    </div>
  )

}