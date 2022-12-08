import React from 'react';
import { Language } from '../const';

export type Article = {
  word: string;
  isResult: boolean;
  transcription: string | null;
  translation: string | React.ReactNodeArray;
};

export type StemArticle = Omit<Article, 'isResult'>;

export type StemResult = {
  word: string;
  isResult: boolean;
  matches: StemArticle[];
};

export type Example = {
  word: string;
  isResult: boolean;
  sentences: string[];
};

export type Results = {
  precise: Article[];
  stems: StemResult[];
  examples: Example[];
};

export type DictionaryResult = {
  title: string;
  fullTitle: string;
  results: Results;
};

export type ResponseData = {
  dic_full_title: string;
  dic_id: number;
  dic_lang: Language;
  dic_short_title: string;
  results: Results;
};
