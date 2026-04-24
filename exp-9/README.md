# Microservice-Based Backend Module

## Experiment
Develop microservice-based backend module

## Overview
This project implements two independent microservices using Flask that communicate via REST APIs. Data is stored in-memory (no database required).

## Services

| Service            | Port  | Responsibility                              |
|--------------------|-------|----------------------------------------------|
| Customer Service   | 5001  | Fetch customer details & their orders        |
| Order Service      | 5002  | Manage orders & update order status          |

---

## Project Structure

microservices/
├── customer_service/
│   ├── app.py
│   └── requirements.txt
├── order_service/
│   ├── app.py
│   └── requirements.txt
└── README.md

---

## Setup & Run

### Prerequisites
- Python 3.9+
- pip

### Run Customer Service
cd customer_service  
pip install -r requirements.txt  
python app.py  

Runs on: http://localhost:5001  

---

### Run Order Service
cd order_service  
pip install -r requirements.txt  
python app.py  

Runs on: http://localhost:5002  

---

## API Endpoints

### Customer Service

GET /  
→ Health check  

GET /customers  
→ Get all customers  

GET /customers/{customer_id}  
→ Get single customer  

GET /customers/{customer_id}/orders ⭐  
→ Fetch customer orders from Order Service  

---

### Order Service

GET /  
→ Health check  

GET /orders  
→ Get all orders  

GET /orders/{order_id}  
→ Get single order  

PUT /orders/{order_id}/status ⭐  
→ Update order status  

Example Body:
{
  "status": "delivered"
}

Valid statuses:
pending | processing | shipped | delivered | cancelled

---

## Key Features

- Microservice architecture  
- Independent services  
- REST API communication  
- Inter-service communication  
- Error handling  

---

## Technologies Used

- Python  
- Flask  
- Requests  
- Postman (for testing)  

---

## Output

- Customer service fetches orders from order service  
- Services run independently on different ports  

---

## Viva Points

- Microservices divide application into smaller independent services  
- Services communicate via REST APIs  
- Improves scalability and maintainability  

---

## Author
Alisha Gupta
