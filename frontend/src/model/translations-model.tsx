import { DictionaryResult, ResponseData } from '../types/translations';
import { adaptData, paintText } from './model-utils';

class TranslationsModel {
  #data: ResponseData[] = [];

  set rowData(data: ResponseData[]) {
    this.#data = data;
  }

  get translations() {
    const adaptedData = adaptData(this.#data);
    return this.#paintData(adaptedData);
  }

  #paintData = (data: DictionaryResult[]) => {
    data.forEach((dictionary) => {
      const results = dictionary.results;

      const preciseResults = results.precise;
      preciseResults.forEach(({ translation }, i, array) => {
        array[i].translation = paintText(translation);
      });

      const stemMatches = results.stems;
      stemMatches.forEach((word) => {
        word.matches.forEach(
          (article, i, array) =>
            (array[i].translation = paintText(article.translation))
        );
      });
    });

    return data;
  };
}

export default TranslationsModel;
