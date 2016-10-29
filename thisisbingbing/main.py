"""`main` is the top level module for your Flask application."""

# Import the Flask Framework
from flask import Flask
from flask import render_template


app = Flask(__name__)
# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.


@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return '<br/>'.join([
        '<a href="/bingbing2">bingbing2</a>',
        '<a href="/catclicker">catclicker</a>',
        '<a href="/catclicker2">catclicker2</a>',
        '<a href="/secret">secret</a>',
        '<a href="/color">color</a>',
        '<a href="/grumpycat">grumpycat</a>',
        '<a href="/lovestory">lovestory</a>',
    ])

@app.route('/bingbing2')
def bingbing2():
    return render_template('hello2.html')

@app.route('/catclicker')
def catclicker():
    return render_template('catclicker.html')

@app.route('/catclicker2')
def catclicker2():
    return render_template('catclicker2.html')

@app.route('/dogclicker')
def dogclicker():
    return render_template('dogclicker.html')

@app.route('/secret')
def secret():
    return render_template('secret.html')


@app.route('/color')
def color():
    return render_template('color.html')


@app.route('/grumpycat')
def grumpycat():
    return render_template('grumpycat.html')

@app.route('/lovestory')
def lovestory():
    return render_template('lovestory.html')


@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, Nothing at this URL.', 404


@app.errorhandler(500)
def application_error(e):
    """Return a custom 500 error."""
    return 'Sorry, unexpected error: {}'.format(e), 500

