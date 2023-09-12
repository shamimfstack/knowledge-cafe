import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import propTypes from 'prop-types'


const Blogs = ({handleAddToBookmark, handleReadingTime}) => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [])


    return (
        <div className="w-2/3">
            {/* <h2> Number of blogs:{blogs.length}</h2> */}
            <div> 
                {
                    blogs.map(blog => <Blog key={blog.id} handleReadingTime={handleReadingTime} handleAddToBookmark={handleAddToBookmark} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: propTypes.func.isRequired,
    handleReadingTime: propTypes.func.isRequired
}

export default Blogs;