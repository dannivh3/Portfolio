from flask import Flask, flash, render_template, redirect, request, session
from flask_session import Session

app = Flask(__name__)
app.config["TEMPLATE_AUTO_RELOAD"] = True

Session(app)

# The Landing Page
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')

@app.route('/projects', methods=['GET'])
def projects():
    return render_template('projects.html')

@app.route('/exp', methods=['GET'])
def exp():
    return render_template('exp.html')