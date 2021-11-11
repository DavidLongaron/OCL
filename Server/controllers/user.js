const db = require('../models/index');

const getUser = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.send(users);
  } catch (error) {
    res.status(500);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    res.status(201);
    res.send(user);
  } catch (error) {
    res.status(500);
  }
};

module.exports = {
  getUser, createUser,
};
