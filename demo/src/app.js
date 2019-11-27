const express = require("express");
const corsMiddleware = require("cors");
const { port, databaseUrl } = require("../config");
const mongoose = require("mongoose");
const routesProd = require("./products/productsRoutes");
const routesUsers = require("./users/usersRouter");
const routesOrders = require("./orders/ordersRouter");
const routesComments = require("./comments/commentsRoutes");
const routesAuth = require("./users/auth/authRoutes");

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
    app.use("/auth", routesAuth);
    app.use("/users", routesUsers);
    app.use("/products", routesProd);
    app.use("/orders", routesOrders);
    app.use("/comments", routesComments);
    app.get("/", (req, res) => res.status(200).json("Welcome!"));
    app.use("*", (req, res) => {
      if (
        req.params !== "orders" ||
        req.params !== "products" ||
        req.params !== "users"
      ) {
        res.status(404).json("Error!!!404!!!");
      }
    });

    app.listen(port, () => {
      console.log("Server has been started!");
    });
    return app;
  } catch (err) {
    console.log(err);
  }
}

module.exports = start;
