

## 🎯 Objective

Build a structured REST API using Flask that supports complete CRUD functionality for managing student records.

## 🛠 Tech Stack

* **Programming Language:** Python
* **Backend Framework:** Flask
* **API Testing Tool:** Postman
* **Deployment Platform:** Render



## 🚀 Functionality

The API supports the following operations:

* Add a new student → `POST`
* Retrieve all students → `GET`
* Fetch a specific student by ID → `GET`
* Modify existing student details → `PUT`
* Remove a student record → `DELETE`

Additional highlights:

* Organized routing using Flask Blueprints
* Handles JSON-based requests and responses
* Clean and modular project structure

## 🧠 Key Concepts Used

### 1. Flask

A minimal and flexible Python framework used to create web services and APIs efficiently.

### 2. RESTful Design

The API follows REST principles, using standard HTTP methods:

* `GET` → Read data
* `POST` → Create new entries
* `PUT` → Update existing data
* `DELETE` → Remove data

### 3. Blueprints

Blueprints help split the application into logical modules.
All student-related routes are grouped within a dedicated blueprint for better maintainability.

### 4. Working with JSON

* `request.get_json()` extracts JSON data sent by the client
* `jsonify()` formats Python objects into JSON responses

### 5. Status Codes

The API returns meaningful HTTP responses such as:

* `200` → Successful request
* `201` → Resource created
* `400` → Invalid input
* `404` → Resource not found

### 6. Temporary Data Storage

Student information is stored in a Python list rather than a database.
Data is cleared whenever the server restarts.

## 📘 What This Project Demonstrates

* Handling URL parameters like `<int:student_id>` and parsing JSON request bodies
* Managing application-level state with global variables and generating unique IDs
* Implementing input validation to ensure required fields (for example, student name) are provided
* Returning appropriate HTTP responses for different outcomes
* Designing structured REST endpoints using Flask

