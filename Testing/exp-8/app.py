from flask import Flask
from routes.students_routes import student_bp
from flask_cors import CORS
import os


def create_app():
    app = Flask(__name__)

    # Register Blueprint
    app.register_blueprint(student_bp)

    return app


# Create app
app = create_app()

# Enable CORS (for frontend connection)
CORS(app, origins="*")


# Home route
@app.route("/")
def home():
    return {"message": "Backend Server is running"}


# Run server
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # for deployment
    app.run(host="0.0.0.0", port=port, debug=True)