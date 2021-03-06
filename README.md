# :bank: Marketplace: Webshop :bank:

## What this project is about

This webshop was created by me for the final exam in week 8 of Codaisseur's Code Academy. We initially had to create an application where you can buy tickets for certain events, containing different features and thus we had to work on User Stories. When I passed this exam, I have continued working on it but altered the assignment and the theme of the application so that I was allowed to put this online. I have changed it to a webshop, gave it styling and cleaned up my code. I have also added features that were not in the assignment, like a shopping cart. The back-end repository can be found here ([Back-end repository](https://github.com/MelissaDTH/marketplace-server.git)). Don't forget to seed the database with the seeds.js file, so that there's actually products shown!

## Table of contents

- **[A quick overview](#a-quick-overview)**
- **[Technologies used](#technologies-used)**
- **[Application features](#application-features)**
- **[Project set-up](#project-set-up)**

## A quick overview:

  <hr />

![gif](./src/GIF/marketplace-1.gif)

  <hr />
<br />

## Technologies used

<b>Front-end</b>

- React
  - Components and props
  - Routers
- Redux
  - Action creators
  - Thunks
  - Reducers
  - Redux-persist
- React-bootstrap
- Superagent

<b>Back-end</b>

- Express
  - REST API
- Sequelize
- Cors
- Body-parser
- Bcrypt
- Docker
- jsonwebtoken
- Nodemon

## Application features

:floppy_disk: Project features :floppy_disk:

- It has a fully working **navigation bar**.
  - It can redirect to /home
  - It can redirect to all the categories
  - It has a Drop down where all categories are shown and clickable
  - You can sign up and login
  - You can go to the shopping cart
- There is a **footer**
- The webshop contains a **homepage**, where different categories are shown
- These categories can be visited by clicking on them or using the navbar
- The products on the webshop are divided in **six categories**. Each category has its own page with the corresponding products and information
- On the category page, **logged in users can add a product** with a form to sell an item
- The products all have their own **details page**
- A product can also be **commented** on, these are shown on the details page
  - These comments were initially in the original exam, but I kept them in to showcase my algorithm that I wrote for it
- Customers can add products to a **shopping cart**, which is a separate page that shows which products are selected as well as the **total price**
- When there are products in that cart, a button that directs the customer to the **checkout page** becomes available. Over there, they can fill in their personal information. No further action or redirection to an actual payment page is yet available here
- The webshop has an overall styling, mostly done with CSS and React-Bootstrap

- Finally, the webshop also has a risk algorithm. This was part of the final assignment, so it isn't fully applicable for this webshop but has been added to demo it.

#### Risk algorithm

To showcase that I can work with algorithms as well, there is a risk algorithm. Products can be added by users, so it can always have a certain risk to it when buying. In this webshop, an algorithm will calculate the amount of risk the product has based upon:

- There is a minimal risk of 5% and a maximum of 95%.
- 10% will be added to the risk if the product is the user's only product
- 10% will be deducted from the risk if a product was added during business hours (09:00 - 17:00)
  - Opposite of that, 10% will be added if it was not during these hours
- If there are > 3 comments on the product, 10% risk will be added

#### Risk algorithm add on

The risk percentage is indicated with a color schema similar to a traffic light:

- If the risk on the product is > 49%, it will be colored **red**
- If the risk on the product is > 19%, it will be colored **yellow**
- If the risk on the product is < 20%, it will be colored **green**

## :construction: Still under construction :construction:

- Logged in customers can not edit a product
- Logged in customers can not add + edit a comment yet
- Let the footer stick to the bottom!
- Add pagination for when more products are added

## Project set-up

<i>Type in your terminal inside the project directory</i>

<b>Front-end</b>

### 1. Clone the repository

```
git clone https://github.com/MelissaDTH/marketplace-webshop.git
```

### 2. Install all dependencies

```
npm install
```

### 3. To start a development server:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

<hr>
<b>Back-end</b>

<i> You will need to create a container on your computer for the database, I used [Docker](http://docker.com/).</i>

### 1. Clone the repository

```
git clone https://github.com/MelissaDTH/marketplace-server.git
```

### 2. Install all dependencies

```
npm install
```

### 3. Run PostgreSQL in a container and connect to it

```
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=secret postgres
```

### 4. To start the server

```
nodemon .
```

### 5. Start the database:

```
Open Docker, connect with the password 'secret'
```

### 5. Seed the database:

```
Make sure there is data in the database, this should work from the start. Otherwise, you can seed the database by making a small change (and undo this) in the seeds.js file in the marketplace-server directory and then save. This will force the database to be seeded. Sometimes the products are in the wrong category, if this is the case, you can seed the database again to correct this.
```
