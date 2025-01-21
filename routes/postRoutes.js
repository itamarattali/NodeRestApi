const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.addPost);
router.get('/', (req, res) => {
    if (req.body.sender) {
        return postController.getPostsBySender(req, res);
    } else {
        return postController.getAllPosts(req, res);
    }
});
router.get('/:id', postController.getPostById);

module.exports = router;
