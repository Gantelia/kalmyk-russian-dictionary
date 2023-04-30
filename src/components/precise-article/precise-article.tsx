import { useState } from 'react';

import { Article } from '../../types/translations';
import { sliceText } from '../../utils-common';
import ShowMoreLink from '../show-more-link/show-more-link';
import './precise-article.scss';

type PreciseArticleProps = {
  article: Article;
};

function PreciseArticle({ article }: PreciseArticleProps) {
  const [showMore, setShowMore] = useState(false);

  const { word, isResult, transcription, translation } = article;

  const handleShowMoreClick = () => {
    setShowMore((current) => !current);
  };

  const anchorId = `${word}-precise`;

  if (!isResult) {
    return (
      <li className="result__item" key={word}>
        <h5 className="result__search-word">{word}</h5>
        <p className="result__no-result">Ничего не найдено</p>
      </li>
    );
  }

  const trimmedText = sliceText(translation);

  return (
    <li className="result__item" key={word}>
      <h5 className="result__search-word" id={anchorId}>
        {word}
      </h5>
      {transcription && (
        <p className="transcription result__search-word">{transcription}</p>
      )}
      {!trimmedText || showMore ? (
        <>
          <p className="translation translation--precise">{translation}</p>
          {trimmedText && (
            <ShowMoreLink onClick={handleShowMoreClick} anchorId={anchorId}>
              Скрыть
            </ShowMoreLink>
          )}
        </>
      ) : (
        <>
          <p className="translation translation--precise">{trimmedText} ...</p>
          <ShowMoreLink onClick={handleShowMoreClick} anchorId={anchorId}>
            Показать больше
          </ShowMoreLink>
        </>
      )}
    </li>
  );
}

export default PreciseArticle;
