import React, { useState, useEffect } from 'react';
import { Post } from '../components/Post';
import { Link } from 'react-router-dom';
import '../style/Posts.css';
import { getPosts } from '../Api';

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
        });
    }, [posts]);

    // console.log(posts);

    return (
        <>
            <div className='wrapper-btn'>
                <Link className='btn-add' to='/posts/new'>
                    Создать пост
                </Link>
            </div>

            <div className='wrapper-posts'>
                {posts.map((item) => {
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
