import { nanoid } from 'nanoid';
import reactStringReplace from 'react-string-replace';
import { DictionaryResult, ResponseData } from '../types/translations';

export const checkData = (text: string | React.ReactNodeArray | null) => {
  if (!text || !text.length) {
    return text;
  }
};

const paintGenres = (text: string | React.ReactNodeArray) => {
  checkData(text);

  return reactStringReplace(text, /(<.+?>)/g, (match) => (
    <span className="remark" key={nanoid()}>
      {match}
    </span>
  ));
};

const paintFaculties = (text: string | React.ReactNodeArray) => {
  checkData(text);

  return reactStringReplace(text, /({.+?})/g, (match) => (
    <span className="remark" key={nanoid()}>
      {match}
    </span>
  ));
};

const paintFirstSentences = (text: string | React.ReactNodeArray) => {
  checkData(text);

  return reactStringReplace(text, /(\n.+?)—/g, (match) => (
    <span className="first-sentence" key={nanoid()}>
      <br />
      {match}—
    </span>
  ));
};

const paintNumeration = (text: string | React.ReactNodeArray) => {
  checkData(text);

  return reactStringReplace(text, /(^\d+[ .)])/gm, (match) => {
    if (/^1[ .)]/gm.test(match)) {
      return (
        <span className="remark" key={nanoid()}>
          {match}
        </span>
      );
    }

    return (
      <span className="remark" key={nanoid()}>
        <br />
        {match}
      </span>
    );
  });
};

export const paintText = (text: string | React.ReactNodeArray) => {
  checkData(text);

  let paintedString = paintGenres(text);
  paintedString = paintFaculties(paintedString);
  paintedString = paintFirstSentences(paintedString);
  paintedString = paintNumeration(paintedString);
  return paintedString;
};

export const adaptData = (dictionaries: ResponseData[]) => {
  const adaptedTranslations: DictionaryResult[] = dictionaries.map(
    (dictionary) => {
      return {
        title: dictionary.dic_short_title,
        fullTitle: dictionary.dic_full_title,
        results: {
          precise: dictionary.results.precise.map(
            ({ word, isResult, transcription, translation }) => ({
              word,
              isResult,
              transcription,
              translation
            })
          ),
          stems: dictionary.results.stems.map(
            ({ word, isResult, matches }) => ({
              word,
              isResult,
              matches: matches.map(({ word, transcription, translation }) => ({
                word,
                transcription,
                translation
              }))
            })
          ),
          examples: dictionary.results.examples.map(
            ({ word, isResult, sentences }) => ({
              word,
              isResult,
              sentences: sentences
            })
          )
        }
      };
    }
  );

  return adaptedTranslations;
};
