from flask import Flask, request
from flask_cors import CORS
import json
from face_rec import FaceRec, marcin, wiola
from PIL import Image
import base64
import io
import os
import shutil
import time


app = Flask(__name__)
CORS(app)


@app.route('/api', methods=['POST', 'GET'])
def api():
	data = request.get_json()
	resp = 'Nobody'
	directory = './stranger'
	


	if data['add'] == 'no':
		if os.path.exists(directory):
			shutil.rmtree(directory)

		if not os.path.exists(directory):
			try:
				os.mkdir(directory)
				time.sleep(1)
				result = data['data']
				b = bytes(result, 'utf-8')
				image = b[b.find(b'/9'):]
				im = Image.open(io.BytesIO(base64.b64decode(image)))
				im.save(directory+'/stranger.jpeg')


				if marcin.recognize_faces() == 'Marcin':
					resp = 'Marcin'
				elif wiola.recognize_faces() == 'Wiola':
					resp = 'Wiola'
				else:
					resp = 'Unauthorized'
			except:
				pass

	elif data['add'] == 'yes':
		path = f"./known_people/{data['userName']}.jpeg"
		if not os.path.exists(path):
			try:
				time.sleep(1)
				result = data['data']
				b = bytes(result, 'utf-8')
				image = b[b.find(b'/9'):]
				im = Image.open(io.BytesIO(base64.b64decode(image)))
				im.save(f"./known_people/{data['userName']}.jpeg")
				time.sleep(1)
				
				user = FaceRec(path , './stranger', data['userName'])

				
				if marcin.recognize_faces() == 'Marcin':
					resp = 'You are already in DataBase'
				else:
					resp = 'Unauthorized'
			except:
				pass

		else: 
			resp = 'Seems like someone used this name or you already created authorisation profile.'

	return resp



if __name__ == '__main__':
	app.run()