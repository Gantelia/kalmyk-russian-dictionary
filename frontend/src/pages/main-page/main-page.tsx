import { useEffect, useState } from 'react';

import Form from '../../components/form/form';
import AllTranslations from '../../components/all-translations/all-translations';
import TranslationsModel from '../../model/translations-model';
import { BACKEND_URL, Language } from '../../const';
import { checkStatus } from './utils';
import './main-page.scss';

const model = new TranslationsModel();

function MainPage() {
  const [dictionaries, setDictionaries] = useState(model.translations);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<Language | null>(null);
  const [words, setWords] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/?lang=${language}&word_items=${words}`
        );
        const data = await response.json();
        model.rowData = data.response;
        setDictionaries(model.translations);
        checkStatus(response);
      } catch (error) {
        setError(true);
        throw new Error(`${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoading]);

  const onSubmit = (lang: Language, words: string) => {
    setIsLoading(true);
    setLanguage(lang);
    setWords(words);
  };

  return (
    <main className="main main--index">
      <Form onSubmit={onSubmit} isLoading={isLoading} />
      {!error && <AllTranslations results={dictionaries} />}
      {error && (
        <p className="error-message">
          Что-то пошло не так...
          <br />
          Попробуйте перезагрузить страницу
        </p>
      )}
    </main>
  );
}

export default MainPage;
