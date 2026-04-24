from flask import Flask, jsonify
import requests

app = Flask(__name__)

customers = [
    {"customer_id": "C001", "name": "Alice Johnson", "email": "alice@example.com"},
    {"customer_id": "C002", "name": "Bob Smith", "email": "bob@example.com"},
    {"customer_id": "C003", "name": "Carol White", "email": "carol@example.com"},
]

ORDER_SERVICE_URL = "http://localhost:5002"

@app.route("/")
def home():
    return jsonify({"service": "Customer Service", "status": "running"})

@app.route("/customers", methods=["GET"])
def get_customers():
    return jsonify({"customers": customers})

@app.route("/customers/<customer_id>", methods=["GET"])
def get_customer(customer_id):
    for c in customers:
        if c["customer_id"] == customer_id:
            return jsonify(c)
    return jsonify({"error": f"Customer '{customer_id}' not found."}), 404

@app.route("/customers/<customer_id>/orders", methods=["GET"])
def get_customer_orders(customer_id):
    customer = next((c for c in customers if c["customer_id"] == customer_id), None)

    if not customer:
        return jsonify({"error": f"Customer '{customer_id}' not found."}), 404

    try:
        res = requests.get(f"{ORDER_SERVICE_URL}/orders")
        orders = res.json()

        customer_orders = [o for o in orders if o["customer_id"] == customer_id]

        return jsonify({
            "customer_id": customer_id,
            "customer_name": customer["name"],
            "total_orders": len(customer_orders),
            "orders": customer_orders
        })

    except:
        return jsonify({"error": "Order service unavailable"}), 500


if __name__ == "__main__":
    app.run(port=5001)