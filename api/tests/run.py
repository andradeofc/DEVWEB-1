from flask import Flask, render_template
from flask_restful import Api
# from flask_bootsrap import Bootsrap
app = Flask(__name__)
# app.config.from_object('config')
# api = Api(app)

@app.route('/')

def index():
    return render_template('home.html')
if __name__ == '__main__':
    app.run(debug=True, port=5000)