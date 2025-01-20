const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Add a New Post
router.post('/', postController.addPost);

// Get All Posts
router.get('/', postController.getAllPosts);

// Get Posts by Sender
router.get('/by-sender', postController.getPostsBySender);

// Get Post by ID
router.get('/:id', postController.getPostById);

module.exports = router;
