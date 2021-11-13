const db = require('../models/index');

const getAllUser = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.send(users);
  } catch (error) {
    res.status(500);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: {
        id: req.params.id,
      },
      include: [{
        model: db.Chara,
        attributes: ['name', 'age', 'birthDay', 'occupation', 'likes', 'dislikes', 'physicalDescription', 'personality', 'background', 'setting', 'gender', 'img', 'id'],
        include: [{
          model: db.Tag,
          attributes: ['tagName', 'id'],
        }],
      }],
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send(error);
    res.status(500);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    res.status(201);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send(error);
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
    console.log(error);
    res.send(error);
    res.status(500);
  }
};

const deleteUser = async (req, res) => {
  try {
    await db.User.destroy({ where: { id: req.params.id } });
    res.send('Destroyed');
    res.status(201);
  } catch (error) {
    console.log(error);
    res.send(error);
    res.status(500);
  }
};

const updateFavorites = async (req, res) => {
  try {
    const savedFavorite = await db.Favorite.findOne({
      where: { UserId: req.params.id, CharaId: req.body.CharaId },
    });
    if (savedFavorite) {
      await db.Favorite.destroy({ where: { UserId: req.params.id, CharaId: req.body.CharaId } });
      res.send('Destroyed');
      res.status(201);
    } else {
      await db.Favorite.create({ UserId: req.params.id, CharaId: req.body.CharaId });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
    res.status(500);
  }
};

module.exports = {
  getUser, createUser, updateUser, deleteUser, getAllUser, updateFavorites,
};
