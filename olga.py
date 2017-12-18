from flask import Flask
from flask import Response
import requests

app = Flask(__name__)


@app.route('/restaurants/<lat>/<lon>')
def hello_world(lat, lon):
    headers = {
        "Authorization": "Bearer sx5hyvAIa__zF8vU1gGqEEE9kWGUqevLKi7vsL36_yYcZeU2-kgdatzM3__XdbIVhulElt8gb0VltTSKSZx3u"
                         "MFJaH8_OI1Mz6sVXNel0v--7Rf__-Na065ZjxczWnYx"
    }
    url = 'https://api.yelp.com/v3/businesses/search?term=dinner&latitude={lat}&longitude={lon}'.format(lat=lat, lon=lon)
    s = requests.get(url, headers=headers)
    return Response(s.text, mimetype='application/json')


if __name__ == '__main__':
    app.run()
