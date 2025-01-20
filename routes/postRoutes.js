const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.addPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.get('/', postController.getPostsBySender);

module.exports = router;
