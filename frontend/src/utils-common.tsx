import { SYMBOLS_LIMIT, TAGS_LIMIT } from './const';
import { checkData } from './model/model-utils';

export const sliceText = (text: string | React.ReactNodeArray) => {
  checkData(text);

  if (typeof text === 'string') {
    return text.length > SYMBOLS_LIMIT ? text.substring(0, SYMBOLS_LIMIT) : '';
  }

  return text.length > TAGS_LIMIT ? text.slice(0, TAGS_LIMIT) : '';
};
