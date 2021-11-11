const express = require('express');

const router = express.Router();
const chara = require('./controllers/chara');
const user = require('./controllers/user');

router.get('/Home', chara.getChara);
router.post('/Create', chara.createChara);
router.get('/user', user.getUser);
router.post('/user', user.createUser);
router.put('/chara/:id', chara.updateChara);
router.put('/user/:id', user.updateUser);
router.delete('/user/:id', user.deleteUser);
router.delete('/chara/:id', chara.deleteChara);
module.exports = router;
