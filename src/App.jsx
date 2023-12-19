import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Posts } from './pages/Posts';
import { Post } from './components/Post';
import './App.css';
// import { Header } from './components/Header';
import { NewPost } from './pages/newPost';
import { Home } from './pages/Home';

function App() {
    return (
        <div className='main-wrapper'>
            {/* <Header /> */}
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:id' element={<Post />} />
                    <Route path='/posts/new' element={<NewPost />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
