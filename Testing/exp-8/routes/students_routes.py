from flask import Blueprint, request
from data.store import students   # ✅ IMPORTANT: single shared list

student_bp = Blueprint('students', __name__)


# ✅ CREATE
@student_bp.route('/students', methods=['POST'])
def create_student():
    data = request.get_json()

    if not data or "name" not in data:
        return {"error": "Name is required"}, 400

    student = {
        "id": len(students) + 1,
        "name": data["name"]
    }

    students.append(student)
    return student, 201


# ✅ READ
@student_bp.route('/students', methods=['GET'])
def get_students():
    return students, 200


# ✅ UPDATE
@student_bp.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()

    for s in students:
        if s["id"] == id:
            s["name"] = data.get("name", s["name"])
            return s, 200

    return {"error": "Student not found"}, 404


# ✅ DELETE (MATCHES TEST EXACTLY)
@student_bp.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    for s in students:
        if s["id"] == id:
            students.remove(s)
            return {"message": "Student deleted"}, 200

    return {"error": "Student not found"}, 404