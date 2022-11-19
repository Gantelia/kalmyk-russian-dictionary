from typing import Union
import psycopg2
from db import DATABASE_STRING
from fastapi import FastAPI

app = FastAPI()
conn = psycopg2.connect(DATABASE_STRING)


@app.get("/")
def read_root():
    return {"Hello": "Nomin Tech!"}


@app.get("/version")
async def read_word():
    return {"response": get_version(conn)}


@app.get("/dictionaries")
async def read_dictionaries():
    return {"response": get_dics(conn)}


def query_db(connection, query):
    try:
        cursor = connection.cursor()
        cursor.execute(query)

        entries = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) for row in cursor.fetchall()]

        return entries if entries else None

    except Exception as e:
        print(f"Database query caused exception: {e}")


def get_version(connection):
    query = f'select version();'
    result = query_db(connection, query)
    return result if result else "Not found"


def get_dics(connection):
    query = f'select * from  dic_refs;'
    result = query_db(connection, query)
    return result if result else "Not found"
 
