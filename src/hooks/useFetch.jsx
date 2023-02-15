import React, { useEffect } from 'react'
import { useState } from 'react';

const useFetch = (url) => {
    const [data,setData]=useState([]);
    useEffect(() => {
        const id=setTimeout(() => {
            fetch(url)
            .then((res)=>res.json())
            .then((res)=>setData(res))
        }, 5000);
    
        return ()=>{
            clearInterval(id);
        }
    }, [])
    return data
}
export default useFetch