
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Body/Bookmarks'
import Header from './components/Header/Header'

function App() {
 

  return (
    <div>
      <Header></Header>
      <div className='max-w-7xl mx-auto md:flex  gap-6'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      

      
    </div>
  )
}

export default App
