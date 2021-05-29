<h1>Backend Analyst Candidate Testing - Tiago Berwanger</h1>

## The challenge

The challenge was to develop an API, using Node.JS, for a product catalog management application.
 
### Features

- [x] As a user I would like to register a product so that I can have access to the data of this product in the future (Title, description, price, category)
- [x] I as a user would like to be able to associate ~~and edit a product category~~ products by category;
- [x] As a user I would like to be able to access the list of all products;
- [x] As a user I would like to be able to filter products by name or category;
- [x] I as a user would like to be able to update the product data;
- [x] I as a user would like to be able to delete a product from my catalog;
 
## Install instructions

### Requirements

Install [NodeJS](https://nodejs.org/pt-br/download/package-manager/) on your machine.  
Install [MongoDB](https://docs.mongodb.com/manual/installation/) on your machine.  

<strong>Clone this repository</strong>
$ git clone <https://github.com/tiagoberwanger/test-backend-nodejs.git>

<strong>Access your terminal/cmd</strong>
$ cd test-backend-nodejs/

<strong>Install dependencies</strong>
$ npm install

<strong>Execute the application</strong>
$ npm start

### The server will start listening on port 3000 - access <http://localhost:3000>

## Testing the application

You can test the application using Insomnia or Postman, with the following URLS:

- http://localhost:3000/products - Method GET - get all products

- http://localhost:3000/products - Method POST - create a product

- http://localhost:3000/products/:id - Method PUT - update a product

- http://localhost:3000/products/search - Method GET - search for title or category

- http://localhost:3000/products/:id - Method DELETE - delete a product

## 🛠 Technologies

- [NodeJS](https://nodejs.org/api/)
- [ExpressJS](https://expressjs.com/)
- [JOI validator](https://joi.dev/api/?v=17.4.0)
- [MongoDB](https://www.mongodb.com/)

