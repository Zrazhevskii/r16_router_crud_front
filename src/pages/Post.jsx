import React from 'react'
import '../style/Post.css'

export const Post = ( props ) => {
  const { id, name, image, content, created } = props.data;
  // console.log(name)


  return (
    <div className='post-content'>
      <div className='header-post'>
        <img src={image} alt="Здесь должна быть какая-то фотография" className='image'/>
        <div className='header-content'>
            <h5 className='name'>{name}</h5>
            <h6>Основатель группы - {created}</h6>
        </div>
        <div className='content-body'>

        </div>
      </div>
    </div>
  )
}
