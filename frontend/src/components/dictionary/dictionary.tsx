import PreciseMatches from '../precise-matches/precise-matches';
import Stems from '../stems/stems';
import Examples from '../examples/examples';
import { Results } from '../../types/translations';

import './dictionary.scss';

type DictionaryProps = {
  results: Results;
};

function Dictionary({ results }: DictionaryProps) {
  return (
    <section className="dictionary">
      <h3 className="visually-hidden">Перевод по выбранному словарю</h3>
      <PreciseMatches matches={results.precise} />
      <Stems results={results.stems} />
      <Examples examples={results.examples} />
    </section>
  );
}

export default Dictionary;
