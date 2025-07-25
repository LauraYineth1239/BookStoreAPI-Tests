📚 BookStore API Tests with Postman & Newman
✅ Overview
Automated API tests for BookStore API using:
✔ Postman for API requests
✔ Newman for CLI execution
✔ HTML Extra Reporter for detailed reports
✔ GitHub Actions CI for automation

🚀 Features
✅ Automated tests for CRUD operations
✅ Positive and negative test cases
✅ CI/CD with GitHub Actions
✅ HTML Report deployed to GitHub Pages
✅ Easy setup (1–2 mins)

🛠 Tech Stack
•	Postman
•	Newman
•	HTML Extra Reporter
•	GitHub Actions

⚡ Quick Setup (1–2 mins)
1. Clone the repository
git clone https://github.com/LauraYineth1239/BookStoreAPI-Tests.git
cd BookStoreAPI-Test
3. Install Newman & HTML Extra Reporter
npm install -g newman newman-reporter-htmlextra
4. Run API Tests
newman run collections/DemoQA_API_Automation.postman_collection.json \
-e collections/DemoQA_Env.postman_environment.json \
--reporters cli,htmlextra \
--reporter-htmlextra-export report.html

✅ CI/CD with GitHub Actions
This project includes GitHub Actions workflow:
•	Runs Newman tests on push and pull request
•	Generates HTML report
•	Publishes report on GitHub Pages

📄 View Report Here:
➡ BookStore API Test Report

📊 Sample Report Screenshot
✅ Deliverables
✔ Postman Collection & Environment
✔ GitHub Actions CI Workflow
✔ HTML Test Report via GitHub Pages

