#  Fullstack Unit Testing (Frontend + Backend)

##  Title

**Perform Unit Testing for Frontend and Backend Modules**

---

##  Aim

To perform unit testing for backend APIs using **pytest** and frontend forms using **vitest**, and execute tests using CLI/Terminal and GitHub Actions.

---

##  Tools & Technologies

* **Backend:** Python, pytest
* **Frontend:** JavaScript, Vitest
* **Version Control:** Git & GitHub
* **CI/CD:** GitHub Actions

---

## Backend Testing (pytest)

###  Setup

```bash
cd Testing/Backend
python -m venv venv
venv\Scripts\activate   # Windows
# or
source venv/bin/activate   # Linux/Mac

pip install -r requirements.txt
```

###  Run Tests

```bash
pytest
```

---

##  Frontend Testing (Vitest)

###  Setup

```bash
cd Testing/Frontend
npm install
```

###  Run Tests

```bash
npm run test
```

---

##  GitHub Actions (CI)

* Workflow file: `.github/workflows/ci.yml`
* Automatically runs tests on:

  * Push to `main`
  * Pull requests

###  CI performs:

* Backend testing using `pytest`
* Frontend testing using `vitest`

---

##  Output

* Backend tests executed successfully using CLI
* Frontend tests executed successfully using CLI
* Automated testing performed using GitHub Actions

---

##  Types of Testing Used

* **Unit Testing** (Frontend & Backend)
* **API Testing** (Backend)

---

##  Conclusion

Unit testing was successfully implemented for both frontend and backend modules using CLI tools. Automation was achieved using GitHub Actions, ensuring tests run automatically on every code update.

---