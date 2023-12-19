import axios from 'axios';

const URL = 'http://localhost:3000/';

export const getPosts = async () => {
    const allPosts = await axios.get(URL + 'posts').then((res) => {
        return res.data;
    });
    return allPosts;
};

export const getPost = async (id) => {
    const post = await axios.get(URL + `posts/${id}`).then((res) => {
        // console.log(data);
        return res.data;
    });
    return post;
};
