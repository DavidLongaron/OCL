const db = require('../models/index');

const updateFavorite = async (req, res) => {
  try {
    const savedFavorite = await db.Favorite.findOne({
      where: { UserId: req.params.id, CharaId: req.body.id },
    });
    if (savedFavorite) {
      await db.Favorite.destroy({ where: { UserId: Number(req.params.id), CharaId: Number(req.body.id) } });
      res.sendStatus(204);
    } else {
      const favorite = await db.Favorite.create({
        UserId: Number(req.params.id),
        CharaId: req.body.id,
      });
      res.send(favorite);
      res.status(201);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
    res.status(500);
  }
};

const getFavorite = async (req, res) => {
  try {
    const savedFavorite = await db.Favorite.findAll();

    res.status(201);

    res.send(savedFavorite);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  updateFavorite, getFavorite,
};
