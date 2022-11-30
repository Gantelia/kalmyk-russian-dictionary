import json

with open("db.json") as f:
    params = json.load(f)
    conn_info = params.get("db_cred")

DATABASE_STRING = \
    f'postgresql://{conn_info["user"]}:'\
    f'{conn_info["password"]}@'\
    f'{conn_info["host"]}:'\
    f'{conn_info["port"]}/'\
    f'{conn_info["database"]}'

query_dic = "SELECT dic_id, dic_short_title, dic_full_title, dic_lang from dic_refs where dic_lang=%s;"

query_word = """
SELECT 
    word, 
    transcription_rus as transcription, 
    translation 
FROM dic_words WHERE word=%s AND dic_id=%s;
"""

query_stem = """
SELECT 
    word, 
    transcription_rus as translation, 
    translation
FROM dic_words
WHERE to_tsvector('kalmyk', word) @@ to_tsquery('kalmyk', %s) AND dic_id=%s;
"""

query_examples = """
SELECT
    examples
FROM dic_words
WHERE examples @@ to_tsquery('kalmyk', %s) AND dic_id=%s;
"""