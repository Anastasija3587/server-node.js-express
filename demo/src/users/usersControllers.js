const users = require("../db/users/all-users.json");
const fs = require("fs");
const path = require("path");

const createUser = (req, res) => {
  const { username, telephone, password, email } = req.body;
  const body = {
    id: Date.now(),
    username,
    telephone,
    password,
    email
  };
  const arr = [];

  const fileUser = path.join(
    __dirname,
    "../",
    "db/",
    "users/",
    "all-users.json"
  );
  fs.readFile(fileUser, (err, data) => {
    if (err) {
      throw err;
    }
    if (data.length > 0) {
      JSON.parse(data).forEach(el => {
        arr.push(el);
      });
      arr.push(body);
      fs.writeFile(fileUser, JSON.stringify(arr), err => {
        if (err) {
          throw err;
        }
      });
    } else {
      let arrUsers = [];
      arrUsers.push(body);
      fs.writeFile(fileUser, JSON.stringify(arrUsers), err => {
        if (err) {
          throw err;
        }
      });
    }
  });
  const userBody = {
    status: "success",
    user: body
  };
  res.status(200).json(userBody);
};

const getId = (req, res) => {
  const idUser = users.find(el => el.id === Number(req.params.id));
  if (idUser) {
    const userBody = {
      status: "success",
      products: idUser
    };
    res.status(201).json(userBody);
  } else {
    const userBody = { status: "not found" };
    res.status(201).json(userBody);
  }
};

module.exports = { createUser, getId };
