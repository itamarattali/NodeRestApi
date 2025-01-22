const Comment = require('../models/comment');

// Add a New Comment
exports.addComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Comments
exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Comments by Post ID
exports.getCommentsByPostId = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a Comment
exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        res.json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a Comment
exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        res.json({ message: 'Comment deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};