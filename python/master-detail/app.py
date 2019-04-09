import csv, models
from flask import Flask, render_template, request, redirect, url_for
from models import Anime

app = models.app
models.initdb()
db = models.db

animelist = Anime.query.with_entities(Anime.name).all()

@app.route('/')
@app.route('/home')
def home():
    return render_template("index.html", animelist=animelist)

@app.route('/<result>', methods=['GET'])
def details(result):
    return render_template("index.html", animelist=animelist, anime=Anime.query.filter_by(name = result).first())

