from difflib import Match
from flask import Flask, request
from flask_cors import CORS
import json
from face_rec import FaceRec
from PIL import Image
import base64
import io
import os
import shutil
import time
import csv

# def check_if_user_exist(userName,row):
	

app = Flask(__name__)
CORS(app)


@app.route('/api', methods=['POST', 'GET'])
def api():
	data = request.get_json()
	resp = 'Unauthoirsed'
	directory = './stranger'
	
	usersNames = []
	usersPaths = []
	users = []

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

				with open('users.csv', 'r') as file:
					reader = csv.reader(file)
					for row in reader:
						user = FaceRec(row[0], './stranger', row[2])
						users.append(user)
						usersNames.append(row[2])
						usersPaths.append(row[0])
					
					file.close()
				
				for item in users[1:]:

					if item.recognize_faces() in usersNames:
						resp = getattr(item, 'known_name')		
			
				

				
				
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
				users.append(user)
				resp = f"New User: {data['userName']}  Added"


				with open('users.csv', mode='a') as user:
					user_writer = csv.writer(user, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

					user_writer.writerow([path, './stranger', data['userName']])

					user.close()
				print(users)	
			except:
				pass

		else: 
			resp = 'Seems like someone used this name or you already created authorisation profile.'

	return resp



if __name__ == '__main__':
	app.run()