import { Router } from 'express';

import {
  createSnippet,
  deleteSnippet,
  getAllSnippet,
  getSnippetById,
  updateSnippet,
} from '../controllers/snippetsController.js';
import { celebrate } from 'celebrate';
import {
  createSnippetSchema,
  getAllSnippetsSchema,
  snippetIdSchema,
  updateSnippetSchema,
} from '../validations/snippersValidation.js';

const router = Router();

router.get('/snippets', celebrate(getAllSnippetsSchema), getAllSnippet);
router.get('/snippets/:snippetId', celebrate(snippetIdSchema), getSnippetById);

router.post('/snippets', celebrate(createSnippetSchema), createSnippet);

router.delete(
  '/snippets/:snippetId',
  celebrate(snippetIdSchema),
  deleteSnippet,
);

router.patch(
  '/snippets/:snippetId',
  celebrate(updateSnippetSchema),
  updateSnippet,
);

export default router;
