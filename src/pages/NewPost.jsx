import { useState } from 'react';
import '../style/NewPost.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { addPost } from '../Api';

export const NewPost = () => {
    const [valuePost, setValuePost] = useState({ content: '' });
    const { content } = valuePost;
    const navi = useNavigate();
    let data;

    const handlerAddContent = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setValuePost((prevForm) => ({ ...prevForm, [name]: value }));
    };

    data = {
        id: null,
        name: 'Linaz Gilayzov',
        image: 'https://i.pinimg.com/originals/7f/bf/55/7fbf558642a237941653e4ce18708b6e.jpg',
        content: valuePost.content,
        created: '',
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (!valuePost.content) {
            alert(
                'У вас нет никаких мыслей? К сожалению, пустые посты не публикуем((('
            );
        }

        addPost(data);
        setValuePost({ content: '' });
        navi('/posts');
    };

    return (
        <>
            <div className='wrapper-new-post'>
                <div className='new-post-header'>
                    <NavLink to={'/'} className='header-new-item'>
                        Публикация
                    </NavLink>
                    <NavLink to={'#'} className='header-new-item'>
                        Фото, видео
                    </NavLink>
                    <NavLink to={'#'} className='header-new-item'>
                        Прямой эфир
                    </NavLink>
                    <NavLink to={'#'} className='header-new-item'>
                        Еще...
                    </NavLink>
                    <NavLink to={'/posts'} className='header-new-item'>
                        &#10006;
                    </NavLink>
                </div>
                <div className='new-post-content'>
                    <div className='wrapper-img'>
                        <img
                            className='img-add-post'
                            src={data.image}
                            alt='какая-то картинка'
                        />
                    </div>
                    <form
                        action=''
                        className='new-content'
                        onSubmit={submitHandler}
                    >
                        <textarea
                            name='content'
                            className='textarea'
                            placeholder='Поле ввода вашего поста'
                            value={content}
                            onChange={handlerAddContent}
                            required
                        />
                        <button className='addBtn'>Опубликовать</button>
                    </form>
                </div>
            </div>
        </>
    );
};
