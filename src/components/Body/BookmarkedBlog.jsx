// import React from 'react';
import propTypes from 'prop-types'

const BookmarkedBlog = ({bookmark}) => {
    const {title} = bookmark;
    console.log(bookmark);
    return (
        <div>
            <h3 className='text-lg text-[#111} font-medium bg-gray-50 p-5 m-2 rounded-lg'>{title}</h3>
        </div>
    );
};

BookmarkedBlog.propTypes = {
    bookmark: propTypes.object.isRequired
}

export default BookmarkedBlog;