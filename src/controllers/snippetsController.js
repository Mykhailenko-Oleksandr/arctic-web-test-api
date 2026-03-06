import createHttpError from 'http-errors';
import { Snippet } from '../models/snippet.js';

export const getAllSnippet = async (req, res) => {
  res.status(200).json('ok');
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
