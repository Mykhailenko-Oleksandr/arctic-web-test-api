import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

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
    title: Joi.string().min(1).required(),
    content: Joi.string().min(10).required(),
    tag: Joi.array().items(Joi.string()).default([]),
    type: Joi.string().valid('Link', 'Note', 'Command').required(),
  }),
};

export const updateSnippetSchema = {
  [Segments.PARAMS]: Joi.object({
    snippetId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1),
    content: Joi.string().min(10),
    tag: Joi.array().items(Joi.string()),
  }).min(1),
};
