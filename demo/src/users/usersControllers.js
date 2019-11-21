const Users = require("./schemaUser");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const user = req.body;

  const hashedPassword = await bcrypt.hash(user.password, 10);
  const userData = { ...user, password: hashedPassword };

  const newUser = new Users(userData);

  newUser
    .save()
    .then(user => {
      const userBody = {
        status: "success",
        user: user
      };
      res.status(201).json(userBody);
    })
    .catch(err => res.status(500).json(err));
};

const getId = (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(user => {
      const userBody = {
        status: "success",
        user: user
      };
      res.status(200).json(userBody);
    })
    .catch(() => res.status(404).json("User was not found!"));
};

const updateUser = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  if (body.password) {
    user.password = await bcrypt.hash(body.password, 10);
  }
  Users.findByIdAndUpdate(req.params.id, body, { new: true })
    .then(user => {
      const userBody = {
        status: "success",
        user: user
      };
      res.status(200).json(userBody);
    })
    .catch(err => res.status(500).json(err));
};

const getAllUsers = (req, res) => {
  Users.find({})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
};

module.exports = { createUser, getId, getAllUsers, updateUser };
