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
