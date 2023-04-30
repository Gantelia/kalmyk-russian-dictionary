import React, { FormEvent, useRef, useState } from 'react';

import { Language } from '../../const';
import LangRadio from '../lang-change/lang-radio';
import Loader from '../loader/loader';
import {
  changeLang,
  areSymbolsRight,
  isLimitMet,
  setError,
  formatText
} from './form-utils';
import './form.scss';

type FormProps = {
  onSubmit: (lang: Language, words: string) => void;
  isLoading: boolean;
};

function Form({ onSubmit, isLoading }: FormProps) {
  const [lang, setLang] = useState(Language.XAL);
  const [isLimitError, setIsLimitError] = useState(false);
  const [isSymbolError, setIsSymbolError] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleLangToggle = () => setLang((current) => changeLang(current));

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const value = inputRef?.current?.value;
    if (!value) {
      return;
    }

    const isLimitValid = isLimitMet(value);
    const areSymbolsValid = areSymbolsRight(value);

    if (isLimitValid && areSymbolsValid) {
      onSubmit(lang, formatText(value));
      setIsLimitError(false);
      setIsSymbolError(false);
      return;
    }

    setError(!isLimitValid, setIsLimitError);
    setError(!areSymbolsValid, setIsSymbolError);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form__lang">
        <legend className="visually-hidden">Направление перевода</legend>
        <LangRadio onChange={handleLangToggle} activeLang={lang}>
          {lang === Language.RUS ? 'Русский' : 'Хальмг'}
        </LangRadio>
        <div className="form__lang-container">
          <button
            className="button lang-toggle"
            type="button"
            onClick={handleLangToggle}
          >
            <svg
              className="lang-toggle__icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.52 3.41c.34 0 .62.28.62.63v3.75c0 .34-.28.62-.62.62h-3.75a.62.62 0 110-1.25h3.12V4.04c0-.35.28-.63.63-.63z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 3.75a6.24 6.24 0 00-4.42 1.83.62.62 0 11-.88-.88 7.5 7.5 0 0110.6 0l2.66 2.65a.62.62 0 11-.89.88l-2.65-2.65A6.24 6.24 0 0010 3.75zM1.86 12.21c0-.34.28-.62.62-.62h3.75a.63.63 0 010 1.25H3.11v3.12a.62.62 0 11-1.25 0v-3.75z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.04 11.77a.63.63 0 01.89 0l2.65 2.65a6.24 6.24 0 008.84 0 .62.62 0 11.88.88 7.5 7.5 0 01-10.6 0l-2.66-2.65a.63.63 0 010-.88z"
              />
            </svg>
            <span className="visually-hidden">Переключить язык</span>
          </button>
        </div>
        <LangRadio onChange={handleLangToggle}>
          {lang === Language.RUS ? 'Хальмг' : 'Русский'}
        </LangRadio>
      </fieldset>
      <div className="form__wrapper">
        <p className="form__field">
          <label className="visually-hidden" htmlFor="translation-field">
            Введите до трёх слов для перевода
          </label>
          <input
            className="form__input"
            type="text"
            id="translation-field"
            placeholder="Введите не более трёх слов"
            ref={inputRef}
            required
            disabled={isLoading}
          />
        </p>
        {isLimitError && (
          <p className="form__error">Пожалуйста, введите не более трёх слов.</p>
        )}
        {isSymbolError && (
          <p className="form__error">
            Символы латинского алфавита недопустимы.
          </p>
        )}
      </div>
      <button
        className="button form__submit"
        type="submit"
        disabled={isLoading}
      >
        Перевести
      </button>
      {isLoading && <Loader />}
    </form>
  );
}

export default Form;
