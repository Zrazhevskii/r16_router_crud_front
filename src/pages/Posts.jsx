import React, { useState, useEffect } from 'react';
import { Post } from '../components/Post';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import '../style/Posts.css';
import { getPosts } from '../Api';
import { PostId } from './PostId';

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    // const URL = 'http://localhost:3000/posts';

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
            // console.log(posts);
        });
        // axios.get(URL).then((data) => {
        //     console.log(data.data)
        //     const allPosts = data.data
        //     console.log(allPosts)
        //     allPosts.forEach(item => {
        //         console.log(item)
        //     })

        //     setPosts(allPosts);
        //     console.log(posts);
        //     posts.map(item => {
        //         console.log(item)
        //     })
        // });
    }, [posts]);

    return (
        <>
            <div className='wrapper-btn'>
                <Link className='btn-add' to='/posts/new'>
                    Создать пост
                </Link>
            </div>

            <div className='wrapper-posts'>
                {posts.map((item) => {
                    // console.log(typeof item.id)
                    return (
                        <Link
                            to={`/posts/${item.id}`}
                            key={item.id}
                            className='link-post'
                        >
                            <Post data={item} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};
