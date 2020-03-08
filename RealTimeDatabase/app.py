from firebase import firebase

firebase = firebase.FirebaseApplication('https://prevencionvial-7bfee.firebaseio.com/', None)
data = {'name': 'Lesly  Samaritano',
        'reporte':'video.mp4',
        }

result = firebase.get('/prevencionvial-7bfee/Conductores/', '')


from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route('/')

def mostrar():
        return render_template("index.html", content=result)

if __name__ == '__main__':
        app.run()