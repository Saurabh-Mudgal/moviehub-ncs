import json
# from urllib import response
from flask import Flask,jsonify,request,render_template

app = Flask(__name__)
f = open('./data/sample.json', 'r')

# returns JSON object as
# a dictionary
data = json.load(f)



# Sorting data in alphanumeric order
dataEntries = data['entries']
dataEntriesSorted = sorted(dataEntries, key=lambda k: k['title'])
data['entries'] = dataEntriesSorted


# Top 30 >= 2010 sorted alphabetically
@app.route('/top30', methods=['GET'])
def top30():
    dataTop30 = data.copy()
    only2010onwards = []
    for entry in dataTop30['entries']:
        if ((entry['releaseYear'] != None) and (entry['releaseYear'] >= 2010)):
            only2010onwards.append(entry)

    dataTop30['entries'] = only2010onwards[:30]

    response2 = jsonify(dataTop30)
    response2.headers.add('Access-Control-Allow-Origin', '*')
    return response2


# Year of release: Ascending
@app.route('/latest', methods=['GET'])
def latest():
    dataLatest = data.copy()
    dataLatest['entries'] = sorted(dataLatest['entries'], key=lambda k: k['releaseYear'], reverse=True)
    response3 = jsonify(dataLatest)
    response3.headers.add('Access-Control-Allow-Origin', '*')
    return response3


# Year of release: Descending
@app.route('/classics', methods=['GET'])
def classics():
    dataClassics = data.copy()
    dataClassics['entries'] = sorted(dataClassics['entries'], key=lambda k: k['releaseYear'])
    response4 = jsonify(dataClassics)
    response4.headers.add('Access-Control-Allow-Origin', '*')
    return response4


# Alphabetical, Ascending
@app.route('/alphabetical', methods=['GET'])
def alphabetical():
    dataAlphabetical = data.copy()
    dataAlphabetical['entries'] = sorted(dataAlphabetical['entries'], key=lambda k: k['title'])
    response5 = jsonify(dataAlphabetical)
    response5.headers.add('Access-Control-Allow-Origin', '*')
    return response5

# Alphabetical, Descending
@app.route('/reverse-alphabetical', methods=['GET'])
def reverseAlphabetical():
    dataReverseAlphabetical = data.copy()
    dataReverseAlphabetical['entries'] = sorted(dataReverseAlphabetical['entries'], key=lambda k: k['title'], reverse=True)
    response6 = jsonify(dataReverseAlphabetical)
    response6.headers.add('Access-Control-Allow-Origin', '*')
    return response6

# Series
@app.route('/series', methods=['GET'])
def series():
    keyValList = ["series"]
    dataSeries = data.copy()
    dataSeries['entries'] = list(filter(lambda d: d['programType'] in keyValList, dataSeries['entries']))
    response7 = jsonify(dataSeries)
    response7.headers.add('Access-Control-Allow-Origin', '*')
    return response7

# Movies
@app.route('/movies', methods=['GET'])
def movies():
    keyValList2 = ["movie"]
    dataMovies = data.copy()
    dataMovies['entries'] = list(filter(lambda d: d['programType'] in keyValList2, dataMovies['entries']))
    response8 = jsonify(dataMovies)
    response8.headers.add('Access-Control-Allow-Origin', '*')
    return response8

# All Results
@app.route('/all-results', methods=['GET'])
def allResults():
    allResults = data.copy()
    response9 = jsonify(allResults)
    response9.headers.add('Access-Control-Allow-Origin', '*')
    return response9

# Closing file
f.close()
app.run(port=5000)