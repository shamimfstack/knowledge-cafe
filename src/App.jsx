
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Body/Bookmarks'
import Header from './components/Header/Header'

function App() {
 const [bookmarks, setBookmarks] = useState([]);
 const [readingTime, setReadingTime] = useState(0);

 const handleAddToBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
  
 }

 const handleReadingTime = time => {
  setReadingTime(readingTime + time)
  console.log("reading time", time);
 }

  return (
    <div>
      <Header></Header>
      <div className='max-w-7xl mx-auto md:flex mt-4 gap-6'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
      

      
    </div>
  )
}

export default App
