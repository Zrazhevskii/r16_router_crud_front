import { useState, useEffect } from 'react';
import '../style/UpdatePages.css';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { getPost, updatePost } from '../Api';

export const UpdatePages = () => {
    const { id } = useParams();
    const [changeable, setChangeable] = useState();
    const navi = useNavigate();

    useEffect(() => {
        getPost(id).then((data) => {
            setChangeable(data);
        });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setChangeable((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost(changeable);
        navi('/posts');
    };

    return (
        changeable && (
            <div className='wrapper-update'>
                <div className='update-roof'>
                    <div className='wrapper-roof-title'>
                        <h5 className='roof-title'>Редактировать публикацию</h5>
                    </div>
                    <NavLink className='goToBack' to={`/posts/${id}`}>
                        &#10006;
                    </NavLink>
                </div>
                <div className='update-content'>
                    <img
                        src={changeable.image}
                        alt=''
                        className='image upimg'
                    />
                    <form className='update-form' onSubmit={handleSubmit}>
                        <textarea
                            name='content'
                            value={changeable.content}
                            className='update-text'
                            onChange={handleUpdate}
                        >
                            {changeable.content}
                        </textarea>
                        <button className='update-btn'>Опубликовать</button>
                    </form>
                </div>
            </div>
        )
    );
};
