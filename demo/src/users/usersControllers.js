const Users = require("../modules/db/schema/schema");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const user = req.body;

  const hashedPassword = bcrypt.hashSync(user.password, 10);
  const userData = { ...user, password: hashedPassword };

  const newUser = new Users(userData);

  const sendResponse = user => {
    const userBody = {
      status: "success",
      user: user
    };
    res.status(201).json(userBody);
  };

  const sendErr = () => {
    res.status(400).json("error: 'user was not saved'");
  };

  newUser
    .save()
    .then(sendResponse)
    .catch(sendErr);
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
    .catch(err => {
      if(res.status(204)){
        return res.send()
      }
        console.log(err);
})};

const updateUser = async (req, res) => {
  const body = req.body
  const id = req.params.id;
  if (body.password) {
    user.password = bcrypt.hashSync(body.password, 10);
  }
  Users.findOneAndUpdate(id, body, { new: true }).then(user => {
    const userBody = {
      status: "success",
      user: user
    };
    res.status(201).json(userBody);
  })
  .catch(err => console.log(err));
};

const getAllUsers = (req, res) => {
  Users.find({}).then(users => {
    res.status(201).json(users);
  }).catch(err=>console.log(err))
};

module.exports = { createUser, getId, getAllUsers, updateUser };
