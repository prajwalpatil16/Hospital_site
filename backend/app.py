from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)   # allow React frontend

# -----------------------
# Database Connection Function
# -----------------------
def get_db_connection():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="Prajwal@16",
        database="hospital_db",
        cursorclass=pymysql.cursors.DictCursor
    )

# -----------------------
# REGISTER API
# -----------------------
@app.post("/api/register")
def register():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    password = data.get("password")

    if not all([name, email, phone, password]):
        return jsonify({"message": "Missing required fields"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Check email already exists
        cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
        user = cursor.fetchone()
        if user:
            return jsonify({"message": "Email already exists"}), 409

        # Insert new user
        cursor.execute(
            "INSERT INTO users (name, email, phone, password, role) VALUES (%s, %s, %s, %s, %s)",
            (name, email, phone, password, "patient")
        )
        conn.commit()

        return jsonify({"message": "Registration successful"}), 201

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"message": "Server error"}), 500

    finally:
        cursor.close()
        conn.close()

# -----------------------
# LOGIN API
# -----------------------
@app.post("/api/login")
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not all([email, password]):
        return jsonify({"message": "Missing required fields"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute(
            "SELECT * FROM users WHERE email=%s AND password=%s",
            (email, password)
        )
        user = cursor.fetchone()

        if not user:
            return jsonify({"message": "Invalid email or password"}), 401

        return jsonify({
            "message": "Login successful",
            "user": user
        }), 200

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"message": "Server error"}), 500

    finally:
        cursor.close()
        conn.close()





# -----------------------
# Appointment Booking API
# -----------------------

# @app.post("/api/book-appointment")
# def book_appointment():
#     data = request.json
    
#     patent_id = data.get()
#     doctor_id = data.get("doctor_id")
#     appointment_date = data.get("appointment_date")
#     symptoms = data.get("symptoms") 

#     if not all([patent_id, doctor_id, appointment_date, symptoms]):
#         return jsonify({"message": "Missing required fields"}), 400
#     try:
#         conn = get_db_connection()
#         cursor = conn.cursor()

#         cursor.execute(
#             "INSERT INTO appointments (patient_id, doctor_id, appointment_date, symptoms, status) VALUES (%s, %s, %s, %s, %s)",
#             (patent_id, doctor_id, appointment_date, symptoms, "pending")
#         )
#         conn.commit()

#         return jsonify({"message": "Appointment booked successfully"}), 201 
#     except Exception as e:
#         print("ERROR:", e)
#         return jsonify({"message": "Server error"}), 500

#     finally:
#         cursor.close()
#         conn.close()

# @app.get("/api/updateStatus")
# def updatedStatus():
#     try: 
#         conn = get_db_connection()
#         cursor = conn.cursor

#         cursor.execute(
#             "select * from doctors where rolr==%s" (doctor)
#         )
#         conn.commite 

#         return jsonify({"doctors" : doctor})
#     except:
#         print("Error")
#         return jsonify({"message" : "server error"})
    
#     finally:
#         cursor.close()
#         conn.close()




@app.get("/")
def home():
    return "Backend running!"


if __name__ == "__main__":
    app.run(debug=True)
