import psycopg2
from psycopg2.extras import RealDictCursor


class DictionariesXal:

    def __init__(self):
        self.cursor = None
        self.connection = None

    def connect(self, dsn):
        """ подключение к БД """
        try:
            self.connection = psycopg2.connect(dsn)
            self.cursor = self.connection.cursor(cursor_factory=RealDictCursor)

        except Exception as e:
            print(f"Failed to connect: {e}")

    def select_version(self):
        """ запрос версии бд """
        self.cursor.execute("SELECT VERSION();")
        result = self.cursor.fetchone()
        print(result)
        return result

    def get_dictionaries(self, query, language):
        """ запрос списка словарей по языку """
        self.cursor.execute(query, (language,))
        result = self.cursor.fetchall()
        return result

    def get_word(self, query, word, dic):
        """ запрос одного слова """
        self.cursor.execute(query, (word, dic))
        result = self.cursor.fetchone()
        return result

    def get_item(self, query, word, dic):
        """ запрос похожих слов или примеров  """
        self.cursor.execute(query, (word, dic))
        result = self.cursor.fetchall()
        return result
