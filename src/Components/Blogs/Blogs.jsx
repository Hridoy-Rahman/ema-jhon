import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('public.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBlogs(data);
            })
    }, [])
    const handleBookmark=(blog)=>{
        console.log(blog)
    }
    return (
        <div>
            <div className='container mx-auto p-4 flex flex-col lg:flex-row'>

                <div className=" w-full lg:w-8/12 p-8">
                    {
                        blogs.map(blog => (
                            
                            <Blog 
                            key={blog.id}
                            blog={blog}
                            handleBookmark={handleBookmark}
                            ></Blog>
                        ))
                    }
                </div>
                <div className=" w-full  lg:w-4/12 p-8">
                    <Bookmark></Bookmark>
                </div>

            </div>
        </div>
    );
};

export default Blogs;