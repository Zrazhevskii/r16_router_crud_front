import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Posts } from './pages/Posts';
import { PostId } from './pages/PostId';
import './App.css';
import { NewPost } from './pages/NewPost';
import { Home } from './pages/Home';
import { UpdatePages } from './pages/UpdatePages';

function App() {
    return (
        <div className='main-wrapper'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='posts' element={<Posts />} />
                    <Route path='posts/:id' element={<PostId />} />
                    <Route path='posts/new' element={<NewPost />} />
                    <Route path='posts/update/:id' element={<UpdatePages />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
