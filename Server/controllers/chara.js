const db = require('../models/index');

const getChara = async (req, res) => {
  try {
    const charas = await db.Chara.findAll();
    res.send(charas);
  } catch (error) {
    res.status(500);
  }
};

const createChara = async (req, res) => {
  try {
    const chara = await db.Chara.create(req.body);
    res.status(201);
    res.send(chara);
  } catch (error) {
    res.status(500);
  }
};
//! Check if the ID is generated automatically or if it has to be created
const updateChara = async (req, res) => {
  try {
    const chara = await db.Chara.findOne({ where: { id: req.params.id } });
    chara.set({ ...chara, ...req.body });
    await chara.save();
    res.status(201);
    res.send(chara);
  } catch (error) {
    res.status(500);
  }
};

//! It works like this?

const deleteChara = async (req, res) => {
  try {
    await db.Chara.destroy();
    res.status(201);
  } catch (error) {
    res.status(500);
  }
};

module.exports = {
  getChara, createChara, updateChara, deleteChara,
};
