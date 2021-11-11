const express = require('express');

const router = express.Router();
const chara = require('./controllers/chara');
const user = require('./controllers/user');
const tag = require('./controllers/tag');

router.get('/chara', chara.getChara);
router.post('/chara', chara.createChara);
router.put('/chara/:id', chara.updateChara);
router.delete('/chara/:id', chara.deleteChara);

router.get('/user/:id', user.getUser);
router.post('/user', user.createUser);
router.put('/user/:id', user.updateUser);
router.delete('/user/:id', user.deleteUser);
router.get('/userAll', user.getAllUser);

router.get('/tag', tag.getTag);
router.post('/tag', tag.createTag);
router.put('/tag/:id', tag.updateTag);
router.delete('/tag/:id', tag.deleteTag);

module.exports = router;
