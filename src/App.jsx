import { Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Posts } from './pages/Posts'
import { Post } from './pages/Post'
import './App.css'
import { Header } from './components/Header'

function App() {

  return (
    <div className='main-wrapper'>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Menu />}>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/posts/:id' element={<Post/>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
