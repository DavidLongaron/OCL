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
const updateUser = async (req, res) => {
  try {
    const user = await db.User.update(req.body, { where: { id: req.params.id } });
    // user.set({ ...user, ...req.body });
    // await user.save();
    res.status(200);
    res.send(user);
  } catch (error) {
    res.status(500);
  }
};

const deleteUser = async (req, res) => {
  try {
    await db.User.destroy({ where: { id: req.params.id } });
    res.send('Destroyed');
    res.status(201);
  } catch (error) {
    res.status(500);
  }
};

module.exports = {
  getUser, createUser, updateUser, deleteUser,
};
