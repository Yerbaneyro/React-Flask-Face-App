# React-Flask-Face-App

You can see [DEMO here](https://awesome-saha-454f9c.netlify.app/)

Important: Back End is operating on Heroku server so its not allowing to create new file for long time. Don't worry about your data it will not be stored anywhere. Anyway...sometimes it could make some issues with recogniting new users because they are quickly deleted. On Demo version use...any Harry Potter picture (for example on you phone) or my picture from CV. There is also Linus or Luke SkyWalker options. Just open that on your phone, show it to camera and press Authorisation button.

If you clone repository and open it localy all new users work good so you can put your face to the system.

#### Technologies
- Flask (Back end)
- Python (Back end)
- React JS (Front end)

#### Description
I created this Facial Recognition App with two parts. Firstly I developed REST API Back End with Flask and Python of course. There is all Recognition Magic happening. Then I created a simple Front End with React JS. If you want to test the app but don't want to add yourself as a new user. Find any of Harry Potter pictures on your phone and show them to your camera then press "Authorisation". Harry has authorization. 

#### Local Installation
If you want to run this app localy you need to run two separate services one for Back End and one for Front End. Backend should work on localhost:5000 if its working somwhere else you should change api link in Front End app as well. 

##### Back End
To start Back End firstly you need to install Python3 and some pip dependences. Best if you can do it inside virtual enviroment. So create that in your root Back End Folder:

```
#Create the virtual environment
python3 -m venv venv

#Activate it
source venv/bin/activate
```

Then in venv run following commands:

```
pip3 install click
pip3 install cmake
pip3 install Pillow
pip3 install dlib
pip3 install face_recognition
pip3 install flask
pip3 install gunicorn
pip3 install Flask-Cors
```
And finaly to start flask app by:

```
flask run
```

##### Front End

To start Front End I used Yarn but you can use npm or some other package manager:
```
yarn install
yarn start
```
or

```
npm install
npm start
```
