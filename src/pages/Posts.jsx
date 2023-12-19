import React, { useState, useEffect } from 'react';
import { Post } from '../components/Post';
import { Link } from 'react-router-dom';
import '../style/Posts.css';

export const Posts = () => {
    // const [posts, setPosts] = useState([]);

    const data = [
        {
            id: 1,
            name: 'Linaz Gilayzov',
            image: 'https://i.pinimg.com/originals/7f/bf/55/7fbf558642a237941653e4ce18708b6e.jpg',
            content: 'Всем привет, я сегодня первый раз прокатился на лыжах',
            created: '27.12.2012',
        },
        {
            id: 2,
            name: 'Linaz Gilayzov',
            image: 'https://i.pinimg.com/originals/7f/bf/55/7fbf558642a237941653e4ce18708b6e.jpg',
            content: 'Привет,  у меня сегодня день рождение!!!!',
            created: '14.04.2019',
        },
        {
            id: 3,
            name: 'Linaz Gilayzov',
            image: 'https://i.pinimg.com/originals/7f/bf/55/7fbf558642a237941653e4ce18708b6e.jpg',
            content: 'Хай, приглашаю всех ко мне в загородный дом)',
            created: '19.07.2020',
        },
    ];
    return (
        <>
            <div className='wrapper-btn'>
                <Link className='btn-add' to='/posts/new'>
                    Создать пост
                </Link>
            </div>

            <div className='wrapper-posts'>
                {data.map((item) => {
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
