import { useState } from 'react';
import cl from 'classnames';

import { DictionaryResult } from '../../types/translations';
import Dictionary from '../dictionary/dictionary';
import './all-translations.scss';

type TranslationsProps = {
  results: DictionaryResult[];
};

function AllTranslations({ results }: TranslationsProps) {
  const [activeDictionary, setActiveDictionary] = useState('Словарь Муниева');

  return (
    <section className="translations">
      <h2 className="visually-hidden">Список словарей и результаты перевода</h2>
      <ul className="dictionaries__list">
        {results.map(({ title, fullTitle }) => (
          <li className="dictionaries__item" key={title}>
            <button
              className={cl('button', 'dictionary-button', {
                'dictionary-button--active': title === activeDictionary
              })}
              type="button"
              onClick={() => setActiveDictionary(title)}
              aria-labelledby="dictionary-label"
            >
              {title}
            </button>
            <p className="tooltip" role="tooltip" id="dictionary-label">
              {fullTitle}
            </p>
          </li>
        ))}
      </ul>

      {results.map(
        ({ title, results }) =>
          title === activeDictionary && (
            <Dictionary key={title} results={results} />
          )
      )}
    </section>
  );
}

export default AllTranslations;
