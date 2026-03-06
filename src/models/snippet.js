import { model, Schema } from 'mongoose';

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
      default: [],
    },
    type: {
      type: String,
      enum: ['Link' | 'Note' | 'Command'],
      default: 'Note',
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
