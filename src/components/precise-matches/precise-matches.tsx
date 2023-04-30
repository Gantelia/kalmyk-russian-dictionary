import { Article } from '../../types/translations';
import PreciseArticle from '../precise-article/precise-article';
import './precise-matches.scss';

type PreciseMatchesProps = {
  matches: Article[];
};

function PreciseMatches({ matches }: PreciseMatchesProps) {
  return (
    <section className="result">
      <h4 className="result__title">Точные совпадения</h4>
      <ul className="result__list">
        {matches?.map((match) => (
          <PreciseArticle key={match.word} article={match} />
        ))}
      </ul>
    </section>
  );
}

export default PreciseMatches;
