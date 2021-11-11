const db = require('../models/index');

const getChara = async (req, res) => {
  try {
    const charas = await db.Chara.findAll({
      include: [{
        model: db.Tag, attributes: ['tagName', 'id'],
      }],
    });
    res.send(charas);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error);
  }
};

const createChara = async (req, res) => {
  try {
    const {
      tag,
      name,
      age,
      birthDay,
      occupation,
      likes, dislikes,
      physicalDescription, personality, background,
      setting, gender, img,
      UserId,
    } = req.body;
    const chara = await db.Chara.create({
      name,
      age,
      birthDay,
      occupation,
      likes,
      dislikes,
      physicalDescription,
      personality,
      background,
      setting,
      gender,
      img,
      UserId,
    });

    const savedTag = await db.Tag.findOne({ where: { tagName: tag } });
    if (savedTag) {
      await db.CharaTag.create({ CharaId: chara.id, TagId: savedTag.id });
    } else {
      const newTag = await db.Tag.create({ tagName: tag });

      await db.CharaTag.create({ CharaId: chara.id, TagId: newTag.id });
    }

    res.status(201);
    res.send(chara);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error);
  }
};

const updateChara = async (req, res) => {
  try {
    const chara = await db.Chara.findOne({ where: { id: req.params.id } });
    chara.set({ ...chara, ...req.body });
    await chara.save();
    res.status(201);
    res.send(chara);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error);
  }
};

const deleteChara = async (req, res) => {
  try {
    await db.Chara.destroy({ where: { id: req.params.id } });
    res.send('Destroyed');
    res.status(201);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  getChara, createChara, updateChara, deleteChara,
};
