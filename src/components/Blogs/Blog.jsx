import propTypes from 'prop-types'

const Blog = ({blog}) => {
    const {name, cover_img, author_img, posted_date, reading_time, title, hashtag } = blog;
    console.log(blog);
    return (
        <div className="m-2">
            <img src={cover_img} alt="" />
            
            <div>
                <div>
                    <img src={author_img} alt="" />
                    <div>
                        <p>{name}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>`${reading_time} min read`</p>
                </div>
            </div>
            <h2>{title}</h2>
            <p href="">{hashtag}</p>
            <a href="">Mark as Read</a>
            
        </div>
    );
};

Blog.propTypes = {
    blog: propTypes.object.isRequired
}

export default Blog;