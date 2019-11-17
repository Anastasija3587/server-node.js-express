const express = require("express");
const corsMiddleware = require("cors");
const { port } = require("./config");
const routesProd = require("./src/products/productsRoutes");
const routesUsers = require("./src/users/usersRouter");
const routesOrders = require("./src/orders/ordersRouter");

const app = express();

app.use(express.json());
app.use(corsMiddleware());
app.use(routesProd);
app.use(routesUsers);
app.use(routesOrders);

app.listen(port);
