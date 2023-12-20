import React from 'react'
import '../style/NewPost.css'

export const NewPost = () => {
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
                    
                </div>
            </div>
    </>
    
  )
}
