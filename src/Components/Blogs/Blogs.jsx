import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('public.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setBlogs(data);
        })
    },[])
    return (
        <div>
            <div className='container mx-auto p-4 flex flex-row'>

                <div className="w-8/12">
                
                </div>
                <div className="w-4/12">
                   <h1></h1>
                </div>

            </div>
        </div>
    );
};

export default Blogs;