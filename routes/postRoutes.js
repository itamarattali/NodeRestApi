const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.addPost);
router.get('/', postController.getAllPosts);
router.get('/by-sender', postController.getPostsBySender);
router.get('/:id', postController.getPostById);

module.exports = router;
