const express = require("express");
const corsMiddleware = require("cors");
const { port, databaseUrl } = require("./config");
const mongoose = require("mongoose");
const routesProd = require("./src/products/productsRoutes");
const routesUsers = require("./src/users/usersRouter");
const routesOrders = require("./src/orders/ordersRouter");

const app = express();

async function start() {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    app.use(express.json());
    app.use(corsMiddleware());
    app.use(routesProd);
    app.use(routesUsers);
    app.use(routesOrders);

    app.listen(port, () => {
      console.log("Server has been started!");
    });
  } catch (err) {
    console.log(err);
  }
}

start()
