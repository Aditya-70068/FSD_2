import pytest
from app import app


# ✅ AUTO RESET BEFORE EVERY TEST (MOST IMPORTANT FIX)
@pytest.fixture(autouse=True)
def clear_students():
    from data.store import students
    students.clear()


# ✅ Flask test client
@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client


# ✅ Test 1: Home route
def test_home(client):
    res = client.get('/')
    assert res.status_code == 200
    assert res.get_json() == {"message": "Backend Server is running"}


# ✅ Test 2: Create student
def test_create_student(client):
    res = client.post('/students', json={"name": "Aditya"})
    data = res.get_json()

    assert res.status_code == 201
    assert data["name"] == "Aditya"
    assert "id" in data


# ✅ Test 3: Missing name error
def test_create_student_error(client):
    res = client.post('/students', json={})
    assert res.status_code == 400
    assert res.get_json() == {"error": "Name is required"}


# ✅ Test 4: Get students (FIXED)
def test_get_students(client):
    client.post('/students', json={"name": "Test"})
    res = client.get('/students')

    assert res.status_code == 200
    assert len(res.get_json()) == 1   # ✅ now will pass


# ✅ Test 5: Update student
def test_update_student(client):
    res = client.post('/students', json={"name": "Old"})
    sid = res.get_json()["id"]

    res = client.put(f'/students/{sid}', json={"name": "New"})
    assert res.status_code == 200
    assert res.get_json()["name"] == "New"


# ✅ Test 6: Delete student
def test_delete_student(client):
    res = client.post('/students', json={"name": "Delete"})
    sid = res.get_json()["id"]

    res = client.delete(f'/students/{sid}')
    assert res.status_code == 200
    assert res.get_json() == {"message": "Student deleted"}