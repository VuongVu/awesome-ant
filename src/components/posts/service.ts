import httpClient from 'src/utils/http-request';

const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

export const loadPosts = () =>
    httpClient({
        method: 'GET',
        url: POSTS_API,
    })
        .then((rs) => rs)
        .catch((err) => err);
