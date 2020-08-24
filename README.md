# CRUD WebApp

a system a CRUD web application capable of creating, editing and deleting notes from different registered users

I decided to validate my knowledge creating an implementation that 
can Create, Read, Update, Delete and View Data (CRUD) using only JS technologies.
you can try it right now by going [here](https://teba-isea-crudnotes.herokuapp.com/)
## requirements
to run this project you need install Nodejs and MongoDB  
## how to deploy on local:

1. download and install [NodeJS and NPM](http://notejs.org/ "Title") and [MongoDB](http://mongodb.com/ "Title")
2. from the terminal open the project root folder
3. execute the project(no nedeed install dependecies) with:
~~~
npm test
~~~
4. go to <http://localhost:3000/> in your browser


## previews

![Homepage](/.readme_files/main.png)
Home page
![create a user](/.readme_files/signup.png)
create a user
![Using notes](/.readme_files/notes.png)
using the notes
## more details

Because it was developed with javascript, this project requires Nodejs and NPM (preferably v14.7.0) to work, and it would be preferable if you have previous knowledge of NodeJS, ExpressJS and non-documentary databases (such as MongoDB)

modules used to develop CRUD Notes:

- Bootstrap: as frontend framework
- express: as backed server
- express-handlebars: as views engine
- mongodb: as nosql database
- mongoose: as object document modeling tool
- express-session: to keep and configure live sessions
- method-override: to extend the http methods with put,delete route and +
- passport & passport-local: to configure the authentication strategy
- bcryptjs: why keeping passwords in plain text is just stupid ;^)
- connect-flash: to print some notifications on the fronted in a comfortable way
