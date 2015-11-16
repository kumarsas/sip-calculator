
1) create a new project/foler "sip-calculator"
2) Open this project in Sublime text.
	"Project" --> Add Folder to project

3) Install node js
4) Open cmd prompt, navigate to the project location
	e.g d:\workspace\sip-calculator

4) Type "npm init"  , then Enter
	enter all the details. You can write the description if you want.

5) This will create a json file "package.json" in the current dir.
	
6)  Now we will install the Express module.
	npm install express@4.13.2 --save

	This will add the below dependency in "package.json"
	"dependencies": {
    "express": "^4.13.2"
  }

  Now we are set with the Express module and can start using that.

7) Now, we will create a server using Express.
	========server.js========
	var express = require('express');
	var app =  express();
	var PORT = 3000;

	app.get('/', function( req, res ){
		res.send('Hello SIP Calculator');
	});

	app.listen(PORT, function(){
		console.log('Express server started on port '+ PORT)
	})
	=================

8) If we want to access static pages, we can create a "public" folder 
 and add html pages in this folder and to make node js use/access the static html files, we can add the below code in server.js

 ===
 app.use( express.static( __dirname + '/public'));
 ===

 9) Add to Git

 	git init
 	add --> git add .
 	commit --> git commit -a -m "Adding heroku port"

10) Create new repository in github
	git remote add origin https://github.com/kumarsas/sip-calculator.git
	git push -u origin master


11) Push To Heroku

	heroku create

	git push heroku master

	heroku open