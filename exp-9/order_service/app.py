from flask import Flask, jsonify, request

app = Flask(__name__)

orders = [
    {"order_id": "ORD001", "customer_id": "C001", "product": "Laptop", "quantity": 1, "status": "shipped"},
    {"order_id": "ORD002", "customer_id": "C001", "product": "Mouse", "quantity": 2, "status": "pending"},
    {"order_id": "ORD003", "customer_id": "C002", "product": "Keyboard", "quantity": 1, "status": "delivered"},
    {"order_id": "ORD004", "customer_id": "C003", "product": "Monitor", "quantity": 1, "status": "pending"},
    {"order_id": "ORD005", "customer_id": "C002", "product": "Headphones", "quantity": 3, "status": "shipped"},
]

VALID_STATUS = ["pending", "processing", "shipped", "delivered", "cancelled"]

@app.route("/")
def home():
    return jsonify({"service": "Order Service", "status": "running"})

@app.route("/orders", methods=["GET"])
def get_orders():
    return jsonify(orders)

@app.route("/orders/<order_id>", methods=["GET"])
def get_order(order_id):
    order = next((o for o in orders if o["order_id"] == order_id), None)
    if not order:
        return jsonify({"error": "Order not found"}), 404
    return jsonify(order)

@app.route("/orders/<order_id>/status", methods=["PUT"])
def update_status(order_id):
    order = next((o for o in orders if o["order_id"] == order_id), None)

    if not order:
        return jsonify({"error": "Order not found"}), 404

    new_status = request.json.get("status")

    if new_status not in VALID_STATUS:
        return jsonify({
            "error": f"Invalid status '{new_status}'. Must be one of: {', '.join(VALID_STATUS)}."
        }), 400

    old_status = order["status"]
    order["status"] = new_status

    return jsonify({
        "message": "Order status updated successfully.",
        "order_id": order_id,
        "old_status": old_status,
        "new_status": new_status
    })


if __name__ == "__main__":
    app.run(port=5002)