import { StemResult } from '../../types/translations';
import StemArticles from '../stem-articles/stem-articles';

type StemsProps = {
  results: StemResult[];
};

function Stems({ results }: StemsProps) {
  return (
    <section className="result">
      <h4 className="result__title result__title--stems">Похожие слова</h4>
      <ul className="result__list">
        {results.map(({ word, isResult, matches }) => {
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
              <h5 className="result__search-word">{word}</h5>
              <StemArticles matches={matches} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Stems;
