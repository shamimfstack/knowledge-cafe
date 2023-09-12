// import React from 'react';
import BookmarkedBlog from "./BookmarkedBlog";
import ReadTime from "./ReadTime";
import propTypes from 'prop-types'

const Bookmarks = ({bookmarks, readingTime}) => {
console.log(bookmarks);

    return (
        <div className="w-1/3 bg-gray-200 p-4">
            <ReadTime readingTime={readingTime}></ReadTime>
            <h2 className="text-3xl text-center">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <BookmarkedBlog key={bookmark.id} bookmark={bookmark}></BookmarkedBlog>)
            }
            {/* <BookmarkedBlog>{bookmarks.length}</BookmarkedBlog> */}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: propTypes.array.isRequired,
    handleReadingTime: propTypes.func.isRequired,
    readingTime: propTypes.array.isRequired
}

export default Bookmarks;