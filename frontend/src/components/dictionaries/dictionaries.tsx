import { useEffect, useState } from 'react';
import cl from 'classnames';

import { DictionaryResult } from '../../types/translations';
import Dictionary from '../dictionary/dictionary';
import './dictionaries.scss';

type TranslationsProps = {
  results: DictionaryResult[];
};

function Dictionaries({ results }: TranslationsProps) {
  const [activeDictionary, setActiveDictionary] = useState('');

  useEffect(() => {
    if (results.length) {
      setActiveDictionary(results[0].title);
    }
  }, [results]);

  return (
    // Список всех словарей с тултипами
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
      {/* Отображение результатов поиска только для выбранного словаря*/}
      {results.map(
        ({ title, results }) =>
          title === activeDictionary && (
            <Dictionary key={title} results={results} />
          )
      )}
    </section>
  );
}

export default Dictionaries;
