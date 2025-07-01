"use client";
import React, { useEffect, useState } from 'react'

export default function Page({ params }) {
  

  const [data, setData] = useState([]);
  
    useEffect(()=>{
        
      const fetchBlogs=async()=>{
        const { slug } = await params
        const blog=await fetch(`http://localhost:3000/api/getBlog?title=${slug}`)
        const parsedBlog=await blog.json()
        setData(parsedBlog)
        // console.log(parsedBlog)
        // console.log(data)
      }
  
      fetchBlogs();
      
    },[])

    useEffect(() => {
    //   console.log(data)
    }, [data])
    
  
  return (
  <>
   

{data[0] && <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div className="mb-4 lg:mb-6 not-format">
              <div className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{data[0].author}</a>
                          <p className="text-base text-gray-500 dark:text-gray-400">{data[0].designation}</p>
                          <p className="text-base text-gray-500 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022">{data[0].date}</time></p>
                      </div>
                  </div>
              </div>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data[0].title.charAt(0).toUpperCase()+data[0].title.slice(1)}</h1>
          </div>
          <div className="lead">{data[0].content}</div>
        </div> 
        </div>
        </div>}
  </>
  )
}