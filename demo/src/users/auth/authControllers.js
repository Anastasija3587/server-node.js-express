const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../schemaUser");
const { secret, tokenLifetime } = require("../../../config");

const passwordMatches = (password1, hash) =>
  bcrypt.compareSync(password1, hash);

const generateToken = paramsForTokenGeneration => {
  return jwt.sign(paramsForTokenGeneration, secret, {
    expiresIn: tokenLifetime
  });
};

const authRegister = async (req, res) => {
  try {
    const { password, email } = req.body;
    const emailMatch = await User.findOne({ email });

    if (emailMatch) {
      return response.status(400).json("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { ...req.body, password: hashedPassword };

    const newUser = new User(userData);
    const createNewUser = await newUser.save();

    const createdUser = await User.find({ email: createNewUser.email });
    const id = createdUser._id;

    const payload = { password, id };

    const token = generateToken(payload);

    res.status(201).json({ status: "success", token, user: createdUser });
  } catch (err) {
    res.status(500).json(err);
  }
};

const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const id = user._id;

    const correctPassword = passwordMatches(password, user.password);

    if (!user || !correctPassword) {
      res.status(404).json("Incorrect Data");
      return;
    }

    const payload = { password, id };

    const token = generateToken(payload);

    res.status(200).json({ status: "success", token: token });
  } catch (err) {
    res.status(500).json(err);
  }
};

const authCurrent = async (req, res) => {
  try {
    const getToken = request =>
      request.body.token ||
      request.query.token ||
      request.headers["x-access-token"];
    const token = getToken(req);
    const userData = jwt.decode(token);

    const user = await User.findById(userData.id);

    res.status(200).json({ status: "success", user });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { authRegister, authLogin, authCurrent };
