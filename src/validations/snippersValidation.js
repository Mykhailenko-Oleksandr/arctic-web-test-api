import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const snippetIdSchema = {
  [Segments.PARAMS]: Joi.object({
    snippetId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const getAllSnippetsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(5).max(20).default(10),
    tag: Joi.string(),
    q: Joi.string().trim().allow(''),
  }),
};

export const createSnippetSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).max(50).required(),
    content: Joi.string().min(10).max(100).required(),
    tag: Joi.array()
      .items(Joi.string().valid(...TAGS))
      .min(1)
      .default(['Other']),
    type: Joi.string().valid('Link', 'Note', 'Command').required(),
  }),
};

export const updateSnippetSchema = {
  [Segments.PARAMS]: Joi.object({
    snippetId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).max(50).required(),
    content: Joi.string().min(10).max(100).required(),
    tag: Joi.array()
      .items(Joi.string().valid(...TAGS))
      .min(1)
      .default(['Other']),
    type: Joi.string().valid('Link', 'Note', 'Command').required(),
  }),
};
