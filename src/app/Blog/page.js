'use client'

import React from "react";
import BlogData from "@/Data/blogData.json";
import Link from "next/link";
import Style from './Blog.module.css'
function Page() {
    console.log(BlogData)
  return (
    <>
      
        <h1 className={Style.mb}>Blog Posts</h1>
        <ul>
          {BlogData.map((posts) => (
            <li key={posts.id}>
            <Link href={`/Post/${posts.id}`}>
               <p className="border-2 border-blue-400 border-opacity-30 mt-[10px] w-[300px] bg-[LightSlateGray] text-white">{posts.id} - {posts.title}</p>
              </Link>
              
            </li>
            ))}
        </ul>
      
    </>
  );
}

export default Page;
