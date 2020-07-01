const axios = require('axios');

exports.fetchPost = async function (req, res, next) {
    const id = req.query.id;
    let data = {}

    try {
        if (id) {
            const fetchPost = `https://jsonplaceholder.typicode.com/posts/${id}`
            const fetchComments = `https://jsonplaceholder.typicode.com/posts/${id}/comments`

            const [post, comments] = await axios.all([axios.get(fetchPost), axios.get(fetchComments)]);
            data = {
                post: post.data,
                comments: comments.data
            }
        } else {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            data = response.data
        }

        res.status(200).json(data)
    } catch (error) {
        const err = new Error(error)
        return next(err);
    }
}