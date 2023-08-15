"use client";
import BlogData from "@/Data/blogData.json";
import Style from "../Post.module.css";
export default function Page({ params }) {
  const post = BlogData.find((data) => data.slug == params.id);

  if (!post) {
    return <p>The blog post with id {params} could not be found.</p>;
  }
  return (
    <>
    
      
      <h1></h1>
      <div className={`${Style.m} ${Style.pt} ${Style.card}`}>
      <h1 className={Style.mh}> My Post Id: {params.slug}</h1>
      <p><span className={Style.tc}>Title:</span> {post?.title}</p>
      <p><span className={Style.tc}>Content:</span> {post?.content}</p>
      <div>
      <p><span className={Style.tc}>Date:</span>{post?.date}</p>
      </div>
      </div>
      
     
      
      
    
    
    
      
    </>
  );
}
