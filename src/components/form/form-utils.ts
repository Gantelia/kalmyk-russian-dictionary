import { Language, MAX_WORDS_COUNT } from '../../const';

export const changeLang = (lang: Language) =>
  lang === Language.RUS ? Language.XAL : Language.RUS;

export const isLimitMet = (input: string) => {
  const words = input.trim().split(/\s+/);
  return words.length <= MAX_WORDS_COUNT;
};

export const areSymbolsRight = (input: string) => !/[a-zA-Z]+/.test(input);

export const setError = (
  isValid: boolean,
  setErrorState: (newState: boolean) => void
) => {
  if (isValid) {
    setErrorState(true);
  } else {
    setErrorState(false);
  }
};

export const formatText = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/(,*\s+)|(,+\s*)/g, ', ');
