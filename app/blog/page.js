"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const blog = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchBlogs=async()=>{
      const blogs=await fetch('http://localhost:3000/api/getAllBlogs')
      const parsedBlogs=await blogs.json()
      setData(parsedBlogs)
      // console.log(parsedBlogs)
      // console.log(data)
    }

    fetchBlogs(); 
    
  },[])

  return (
    <div className="m-6 grid grid-cols-3">
        {data.map((e)=>{
          return <div key={e.title} className="my-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.title.charAt(0).toUpperCase()+e.title.slice(1)}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.content.slice(0,70)}...</p>
                    <Link href={`blog/${e.title.replace(/\s+/g, '-')}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        
                    </Link>
                  </div>
        })}
        
    </div>

    

  )
}

export default blog
