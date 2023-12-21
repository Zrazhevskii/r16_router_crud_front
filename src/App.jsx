import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Posts } from './pages/Posts';
import { PostId } from './pages/PostId';
import './App.css';
import { NewPost } from './pages/NewPost';
import { Home } from './pages/Home';

function App() {
    return (
        <div className='main-wrapper'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='posts' element={<Posts />} />
                    <Route path='posts/:id' element={<PostId />} />
                    <Route path='posts/new' element={<NewPost />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
