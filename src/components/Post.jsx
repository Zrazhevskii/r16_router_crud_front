import '../style/Post.css';
import PropTypes from 'prop-types';

export const Post = (props) => {
    const { name, image, content, created } = props.data;

    return (
        <div className='post-content'>
            <div className='header-post'>
                <img
                    src={image}
                    alt='Здесь должна быть какая-то фотография'
                    className='image'
                />
                <div className='header-content'>
                    <h5 className='name'>{name}</h5>
                    <h6>Основатель группы - {created}</h6>
                </div>
                <div className='content-body'>
                    <h5>{content}</h5>
                </div>
            </div>
            <div className='content-footer'>
                <button className='like-toggle'>&#128077; Нравится</button>
                <button className='coment'>Комментировать</button>
            </div>
        </div>
    );
};

Post.propTypes = {
    data : PropTypes.shape({
        name : PropTypes.string.isRequired,
        image : PropTypes.string.isRequired,
        content : PropTypes.string.isRequired,
        created : PropTypes.string.isRequired,
    }),
    
}
