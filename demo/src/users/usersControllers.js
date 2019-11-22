const Users = require("./schemaUser");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userData = { ...user, password: hashedPassword };
    const newUser = new Users(userData);
    const createNewUser = await newUser.save();
    res.status(201).json({ status: "success", user: createNewUser });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getId = async (req, res) => {
  try {
    const findUsersById = await Users.findById(req.params.id);
    res.status(200).json({ status: "success", user: findUsersById });
  } catch {
    res.status(404).json("User was not found!");
  }
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;
    if (body.password) {
      user.password = await bcrypt.hash(body.password, 10);
    }
    const userUpdate = await Users.findByIdAndUpdate(req.params.id, body, {
      new: true
    });
    res.status(200).json({ status: "success", user: userUpdate });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find({});
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createUser, getId, getAllUsers, updateUser };
