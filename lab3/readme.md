Hyper Text Transfer Protocol
Html - Hyper Text Markup Language
CSS - Cascade Style Sheet
NPM - Node Package Manager

# http module

hyper text transfer protocol
html -> hyper text markup languange
css -> cascading style sheet
npm -> node package manager

# Methods 
    GET, POST, PUT, PATCH, DELETE

# HTTP STATUS CODE
    200 -> ok
    201 -> created
    202 -> Accepted
    204 -> No content
    400 -> Bad request
    401 -> unauthorized
    403 -> Forbidden
    404 -> Not found
    500 -> Internal server error
    503 -> Service unavailable

Any api can be of 4 types
1. Get - Read
2. Post - Create
3. Put/Patch - Update
4. Delete - Delete

Api can be reposned by server with status code and json data. APi generally start with API/version.
By default browser can check only get request. To check other three request type like post, put/patch and delete we require frontend or third party API tester like postman, thunderclient, ecoAPI.

## Server can send data
1. html content
2. html files
3. json data
4. plain text
5. css
6. jss
7. file

## Server can set Header to send data

1. res.writeHeader( )
2. res.setHeader

## Server can set status code

1. res.statusCode( )
2. res.writeHeader( )

## request methods

1. get
2. post
3. put/patch
4. delete

## # NPM Project

# NPM Project

# NPM Project

1. create project folder
2. right click on project folder and select open in integrated terminal
![alt text](./image.png)
3. type `npm init -y` press enter
4. open package.json file from project folder
5. update type as `type:module` in package.json
![alt text](./image.png)
6. type in terminal `npm i nodemon -D to install nodemon, which restarts server while file changes. -D flag indicate intstall in dev dependency.
7. it creates node_modules folder and package-lock.json.
8. update .gitignore file and write project folder/node_modules.
9. update package.json to run the project, update script property as below 
![alt text](./image-2.png)
```
"scripts" : {
    "start" : "node app.js",
    "dev" : "nodemon app.js:
},
```
'