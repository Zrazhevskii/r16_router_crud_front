import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../Api';

export const PostId = () => {
    const [post, setPost] = useState();
    const { id } = useParams();

    // getPost(id).then((res) => {
    //   console.log(res)
    // })

    useEffect(() => {
      getPost(id).then((data) => {
        setPost(data)
      })
    }, [id])

    console.log(post)
    
    return <div>PostId</div>;
};
