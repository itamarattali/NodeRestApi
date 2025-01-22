const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.addComment);
router.get('/', commentController.getAllComments);
router.get('/:postId', commentController.getCommentsByPostId);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;