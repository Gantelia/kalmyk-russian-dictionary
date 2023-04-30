import { Example } from '../../types/translations';
import './examples.scss';

type ExamplesProps = {
  examples: Example[];
};

function Examples({ examples }: ExamplesProps) {
  return (
    <section className="result">
      <h4 className="result__title">В примерах</h4>
      <ul className="result__list">
        {examples.map(({ word, isResult, sentences }) => {
          if (!isResult) {
            return (
              <li className="result__item" key={word}>
                <h5 className="result__search-word">{word}</h5>
                <p className="result__no-result">Ничего не найдено</p>
              </li>
            );
          }
          return (
            <li className="result__item" key={word}>
              <h5 className="result__search-word result__search-word--examples">
                {word}
              </h5>
              <ul className="result__list result__list--sentences">
                {sentences.map((sentence) => (
                  <li
                    className="result__sentence result__list-style-arrow"
                    key={sentence}
                  >
                    {sentence}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Examples;
