from typing import Union
from fastapi import FastAPI
from db import DATABASE_STRING, query_dic, query_word, query_stem, query_examples
import json
from dics_xal import DictionariesXal

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "Nomin Tech!"}


@app.get("/dictionaries/{lang}")
async def read_dictionaries(lang: Union[str, None] = None):
    return {"request": lang, "response": get_dics(lang)}


def get_dics(lang):
    psyco = DictionariesXal()
    psyco.connect(dsn=DATABASE_STRING)
    result = psyco.get_dictionaries(query=query_dic, language=lang)
    return result if result else None
 

def get_data(lang, word_items):
    psyco = DictionariesXal()
    psyco.connect(dsn=DATABASE_STRING)
    dictionaries = list()
    dic_list = psyco.get_dictionaries(query=query_dic, language=lang)
    words = word_items.split(',')
    for d in dic_list:
        d['results'] = dict()
        precise = list()
        stems = list()
        examples = list()
        dic_id = d['dic_id']
        for w in words:
            # обрабатываем перевод слова
            translation = psyco.get_word(query=query_word, word=w, dic=dic_id)
            if translation:
                translation['isResult'] = True
            else:
                translation = dict(word=w, isResult=False, transcription=None, translation=None)
            precise.append(translation)

            # обрабатываем стемы слова
            matches_list = psyco.get_item(query=query_stem, word=w, dic=dic_id)
            if matches_list:
                m = [x for x in matches_list if x['word'] != w]
                s = dict(word=w, isResult=True, matches=m)
            else:
                s = dict(word=w, isResult=False, matches=matches_list)
            stems.append(s)

            # ищем в примерах
            example = psyco.get_item(query=query_examples, word=w, dic=dic_id)
            sentences = list(map(lambda x: x["examples"], example))
            if sentences:
                e = dict(word=w, isResult=True, sentences=sentences)
            else:
                e = dict(word=w, isResult=False, sentences=None)
            examples.append(e)

        d['results']['precise'] = precise
        d['results']['stems'] = stems
        d['results']['examples'] = examples
        dictionaries.append(d)
    json_object = json.dumps(dictionaries, ensure_ascii=False, indent=4)
    print(json_object)
    return json_object

