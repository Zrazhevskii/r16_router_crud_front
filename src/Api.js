import axios from 'axios';

const URL = 'http://localhost:3000/';

export const getPosts = async () => {
    const allPosts = await axios
        .get(URL + 'posts')
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return allPosts;
};

export const getPost = async (id) => {
    const post = await axios
        .get(URL + `posts/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return post;
};

export const deletPost = async (id) => {
    const delPost = await axios
        .delete(URL + `remove/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return delPost;
};

export const addPost = async (data) => {
    const newPost = await axios
        .post(URL + 'posts/new', data)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error, 'Ошибка отправки данных');
        });
    return newPost;
};

export const updatePost = async (data) => {
    const update = await axios
        .post(URL + `posts/update/${data.id}`, data)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error, 'Ошибка отправки данных');
        });
    return update;
};
