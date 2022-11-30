from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_read_main():
    response = client.get("/")
    print('test')
    assert response.status_code == 200
    assert response.json() == {"Hello": "Nomin Tech!"}


test_read_main()