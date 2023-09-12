import propTypes from 'prop-types'
import './Blog.css';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {name, cover_img, author_img, posted_date, reading_time, title, hashtags } = blog;
    // console.log(blog);
    return (
        <div className="mt-4">
            <img src={cover_img} alt={`Cover picture of the title ${title}`} />
            
            <div className='flex justify-between items-center'>
                <div className='mt-8 flex justify-between items-center gap-6'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <p className='text-2xl text-[#111] font-bold'>{name}</p>
                        <p className='text-[#3d3d3d] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-[#3d3d3d] text-lg font-medium'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-red-600 ml-2'><FaBookmark></FaBookmark></button>
                    
                </div>
            </div>
            <h2 className='text-[#111] text-3xl font-bold mt-4'>{title}</h2>
            <p className='text-lg text-[#111] font-medium mt-4' href="">
            {hashtags.map(hash => <span className='mr-2 text-[#3d3d3d]'><a href="#">{hash}</a></span>)}
            </p>
            <button onClick={() => handleReadingTime(reading_time)} className='text-[#6047EC] text-xl font-semibold underline' href="">Mark as Read</button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: propTypes.object.isRequired,
    handleAddToBookmark: propTypes.func.isRequired,
    handleReadingTime: propTypes.func.isRequired
}

export default Blog;