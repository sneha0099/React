import React, { useEffect, useState  } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();
    
    // const [data , setdata] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data);
    //     })
    // }, [])
  return (
    <div className=' bg-gray-600 text-white text-3xl p-4'>Github followers: {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300} /></div>
  )
}

export default Github

export const GithubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}