import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [])


    return (
        <div>
            <h2> Number of blogs:{blogs.length}</h2>
            <div className="md:w-2/3">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;