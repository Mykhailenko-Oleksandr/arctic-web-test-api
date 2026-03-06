import { Snippet } from '../models/snippet.js';

export const getAllSnippet = async (req, res) => {
  res.status(200).json('ok');
};

export const getSnippetById = async (req, res) => {
  res.status(200).json('ok');
};

export const createSnippet = async (req, res) => {
  const snippet = await Snippet.create({
    ...req.body,
  });

  res.status(201).json(snippet);
};

export const deleteSnippet = async (req, res) => {
  res.status(200).json('ok');
};

export const updateSnippet = async (req, res) => {
  res.status(200).json('ok');
};
