import createHttpError from 'http-errors';
import { Snippet } from '../models/snippet.js';

export const getAllSnippet = async (req, res) => {
  const { page = 1, limit = 10, q, tag } = req.query;

  const snippetQuery = Snippet.find();

  const skip = (page - 1) * limit;

  if (q) {
    snippetQuery.or([
      { title: { $regex: q, $options: 'i' } },
      { content: { $regex: q, $options: 'i' } },
    ]);
  }

  if (tag) {
    snippetQuery.where('tag').equals(tag);
  }

  const [totalSnippets, snippets] = await Promise.all([
    snippetQuery.clone().countDocuments(),
    snippetQuery.skip(skip).limit(limit).sort({ updatedAt: -1 }),
  ]);

  const totalPages = Math.ceil(totalSnippets / limit);

  res.status(200).json({ page, limit, totalSnippets, totalPages, snippets });
};

export const getSnippetById = async (req, res) => {
  const { snippetId } = req.params;
  const snippet = await Snippet.findById(snippetId);

  if (!snippet) {
    throw createHttpError(404, 'Snippet not found');
  }

  res.status(200).json(snippet);
};

export const createSnippet = async (req, res) => {
  const snippet = await Snippet.create({
    ...req.body,
  });

  res.status(201).json(snippet);
};

export const deleteSnippet = async (req, res) => {
  const { snippetId } = req.params;
  const snippet = await Snippet.findByIdAndDelete(snippetId);

  if (!snippet) {
    throw createHttpError(404, 'Snippet not found');
  }

  res.status(200).json(snippet);
};

export const updateSnippet = async (req, res) => {
  const { snippetId } = req.params;

  if (!req.body) {
    throw createHttpError(400, 'There must be data to update');
  }

  const snippet = await Snippet.findByIdAndUpdate(snippetId, req.body, {
    new: true,
  });

  if (!snippet) {
    throw createHttpError(404, 'Snippet not found');
  }

  res.status(200).json(snippet);
};
