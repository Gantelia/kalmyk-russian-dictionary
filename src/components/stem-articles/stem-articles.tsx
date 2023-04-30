import { StemArticle } from '../../types/translations';
import './stem-articles.scss';

type StemArticlesProps = {
  matches: StemArticle[];
};

function StemArticles({ matches }: StemArticlesProps) {
  return (
    <ul className="result__list">
      {matches.map(({ word, transcription, translation }) => (
        <li className="stem__item" key={word}>
          <h6 className="stem__word result__list-style-arrow">{word}</h6>
          {transcription && (
            <p className="transcription stem__transcription">{transcription}</p>
          )}
          <p className="translation stem__translation">{translation}</p>
        </li>
      ))}
    </ul>
  );
}

export default StemArticles;
