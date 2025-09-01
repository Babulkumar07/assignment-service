👇

🛒 Assignment Service (Node.js + Express)
📌 Overview

This is a simple Node.js + Express application built as part of an assignment.
It provides two APIs:

A GET /products API to fetch a list of products.

A POST /cart API to add items to a cart and calculate the total price.

🚀 Features

REST APIs built using Express.js

Returns a hardcoded product list with id, name, and price

Accepts product id and quantity to calculate the total price

Proper error handling for invalid product IDs

Lightweight and easy to run locally

📂 Project Structure
assignment-service/
│
├── node_modules/          # Dependencies
├── package.json           # Project configuration
├── package-lock.json      # Dependency lock file
└── server.js              # Main Express server

⚙️ Installation & Setup

Clone this repository:

git clone https://github.com/your-username/assignment-service.git
cd assignment-service


Install dependencies:

npm install


Start the server:

node server.js


Server will run at:

http://localhost:3000

📡 API Endpoints
1. Root Endpoint
GET /


Response:

Welcome! Server is running. Use /products to see products.

2. Get Products
GET /products


Response:

[
  { "id": 1, "name": "Bottle", "price": 250 },
  { "id": 2, "name": "Bag", "price": 500 },
  { "id": 3, "name": "Notebook", "price": 100 }
]

3. Add to Cart
POST /cart


Body (JSON):

{
  "productId": 1,
  "quantity": 2
}


Response:

{
  "productId": 1,
  "quantity": 2,
  "totalPrice": 500
}

🛠 Tech Stack

Node.js

Express.js

Postman/Thunder Client (for testing APIs)
