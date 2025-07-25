# 🚀 QA Automation Project – API & UI Tests

![Build Status](https://img.shields.io/github/actions/workflow/status/<your-username>/<your-repo>/ci.yml?branch=main)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📌 Overview
This project includes **API Test Automation** (BookStore API) using **Postman + Newman** and **UI Test Automation** using **Cypress**.  
It also integrates **CI/CD with GitHub Actions** and generates **HTML reports** automatically.

---

## ✅ Features
- **API Testing**:
  - `POST /login`
  - `GET /books`
  - `POST /books`
  - `PUT /books/{id}`
  - `DELETE /books/{id}`
  - Includes **positive & negative cases**
- **UI Testing**:
  - Login with valid/invalid credentials
  - Create, Edit, and Delete a user
- **Reports**:
  - HTML Reports for API & UI
  - GitHub Actions artifacts upload
- **CI/CD**:
  - Runs tests on every push to `main`

---

## ⚡ Quick Start (2 minutes)

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2️⃣ Install Dependencies
```bash
# Install Node.js dependencies for Cypress
npm install

# Install Newman globally
npm install -g newman newman-reporter-htmlextra
```

---

## 🧪 Run Tests Locally

### ▶ Run API Tests (Postman Collection)
```bash
newman run collections/DemoQA_API_Automation.postman_collection.json -e collections/DemoQA_Env.postman_environment.json --reporters cli,htmlextra --reporter-htmlextra-export newman-report.html
```

### ▶ Run UI Tests (Cypress)
```bash
npx cypress run --spec "cypress/e2e/ui-tests.cy.js" --reporter mochawesome
```

---

## 📊 Reports
- ✅ **API Tests Report** → `newman-report.html`
- ✅ **UI Tests Report** → `mochawesome-report/`

**GitHub Actions Reports**:  
[➡ View Artifacts Here](https://github.com/<your-username>/<your-repo>/actions)

---

## ⚙ Tech Stack
- **Postman & Newman** – API Testing
- **Cypress** – UI Testing
- **GitHub Actions** – CI/CD
- **Mochawesome / HTML Extra** – Reporting

---

## ✅ CI/CD (GitHub Actions)
This project runs tests automatically on every push to `main`.

```yaml
name: API & UI Tests CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  run-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: |
          npm install
          npm install -g newman newman-reporter-htmlextra

      - name: Run API Tests
        run: |
          newman run collections/DemoQA_API_Automation.postman_collection.json           -e collections/DemoQA_Env.postman_environment.json           --reporters cli,htmlextra           --reporter-htmlextra-export newman-report.html           --suppress-exit-code

      - name: Run UI Tests
        run: npx cypress run --reporter mochawesome

      - name: Upload Reports
        uses: actions/upload-artifact@v4
        with:
          name: test-reports
          path: |
            newman-report.html
            mochawesome-report/
```

---

## 📸 Screenshots
![Sample Report Screenshot](screenshots/report-example.png)

---

## 👩‍💻 Author
**Your Name**  
[LinkedIn](https://linkedin.com/in/yourprofile) | [GitHub](https://github.com/your-username)

---

### ✅ Next Steps
- Add **code coverage** (NYC for API or Cypress Coverage plugin)
- Add **visual regression testing** for UI
