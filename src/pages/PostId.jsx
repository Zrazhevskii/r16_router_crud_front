import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getPost, deletPost } from '../Api';
import '../style/PostId.css';

export const PostId = () => {
    const [post, setPost] = useState();
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getPost(id).then((data) => {
            setPost(data);
        });
    }, [id]);

    const handleDeletPost = (id) => {
        deletPost(id)
        navigate('/posts')
    }

    return (
        <>
            { post && (<div className='post-content'>
                <div className='header-post'>
                    <img
                        src={post.image}
                        alt='Здесь должна быть какая-то фотография'
                        className='image'
                    />
                    <div className='header-content'>
                        <h5 className='name'>{post.name}</h5>
                        <h6>Основатель группы - {post.created}</h6>
                    </div>
                    <div className='content-body'>
                        <h5>{post.content}</h5>
                    </div>
                </div>
                <div className='content-footer'>
                    <button className='like-toggle'>&#128077; Нравится</button>
                    <button className='coment'>&#x270E; Комментировать</button>
                    <button className='change-post'>Изменить</button>
                    <button className='delet-post' onClick={() => handleDeletPost(post.id)}>Удалить</button>
                </div>
            </div>)}
            <Link to={'/posts'} className='btn-posts'>
                К постам
            </Link>
        </>
    );
};
