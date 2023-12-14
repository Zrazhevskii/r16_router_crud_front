import { Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Posts } from './pages/Posts'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Menu />}>
            <Route index element={<Posts/>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
