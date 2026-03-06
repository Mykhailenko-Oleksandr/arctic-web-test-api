import { Router } from 'express';

import {
  createSnippet,
  deleteSnippet,
  getAllSnippet,
  getSnippetById,
  updateSnippet,
} from '../controllers/snippetsController.js';

const router = Router();

router.get('/snippets', getAllSnippet);
router.get('/snippets/:noteId', getSnippetById);

router.post('/snippets', createSnippet);

router.delete('/snippets/:noteId', deleteSnippet);

router.patch('/snippets/:noteId', updateSnippet);

export default router;
