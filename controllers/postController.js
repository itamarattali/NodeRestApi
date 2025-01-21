const Post = require('../models/post');

exports.addPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPostsBySender = async (req, res) => {
    try {
        const posts = await Post.find({ sender: req.query.sender });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
