import csv, models
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/newDB.db' #make sure db folder is present
db = SQLAlchemy(app)

def initdb():
    app.app_context().push()
    db.init_app(app)
    db.create_all()
    return app

def newUser(user):
    db.session.add(User(user["username"], user["email"]))
    db.session.commit()

def updateUser(updatedUser, id):
    queriedUser = Person.query.get(id)
    queriedUser.username = updatedUser["username"]
    queriedUser.email = updatedUser["email"]
    db.session.commit()

def deleteUser(id):
    db.session.delete(User.query.get(id))
    db.session.commit()

@app.route('/')
@app.route('/home')
def home():
    return render_template("index.html", variable=variable)

@app.route('/<result>', methods=['GET'])
def details(result):
    return render_template("index.html", users=User.query.all(), userDetails=User.query.filter_by(id=result).first())

@app.route('/addNewUser', methods=['POST'])
def addNewUser_view():
    userToAdd = {
        username = request.form["username"]
        email = request.form["email"]
    }
    newUser(userToAdd)
    return redirect(url_for('home'))

@app.route('/updateUser', methods=['POST'])
def updateUser_view():
    updatedUserInfo = {
        username = request.form["username"]
        email = request.form["email"]
    }
    updateUser(updatedUserInfo)
    return redirect(url_for('home'))

@app.route('/deleteUser', methods=['POST'])
def deleteUser_view():
    deleteUser(request.form["id"])
    return redirect(url_for('home'))