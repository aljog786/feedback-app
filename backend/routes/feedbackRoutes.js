import express from 'express';
import { getFeedback,addFeedback,deleteFeedback,updateFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.get('/', getFeedback);

router.post('/', addFeedback);

router.delete('/:id', deleteFeedback);

router.put('/:id', updateFeedback);

export default router;
