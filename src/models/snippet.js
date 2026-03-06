import { model, Schema } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const snippetSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    tag: {
      type: [String],
      enum: TAGS,
      default: ['Other'],
    },
    type: {
      type: String,
      enum: ['Link', 'Note', 'Command'],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

snippetSchema.index(
  { title: 'text', content: 'text' },
  {
    name: 'SnippetTextIndex',
    weights: { title: 10, content: 5 },
  },
);

snippetSchema.index({ tags: 1 });

export const Snippet = model('Snippet', snippetSchema);
