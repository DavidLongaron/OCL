const db = require('../models/index');

const getTag = async (req, res) => {
  try {
    const tags = await db.Tag.findAll();
    res.send(tags);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error);
  }
};

const createTag = async (req, res) => {
  try {
    const tags = await db.Tag.create(req.body);
    res.status(201);
    res.send(tags);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error);
  }
};

const updateTag = async (req, res) => {
  try {
    const tag = await db.Tag.findOne({ where: { id: req.params.id } });
    tag.set({ ...tag, ...req.body });
    await tag.save();
    res.status(201);
    res.send(tag);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error);
  }
};

const deleteTag = async (req, res) => {
  try {
    await db.Tag.destroy({ where: { id: req.params.id } });
    res.send('Destroyed');
    res.status(201);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  getTag, createTag, updateTag, deleteTag,
};
