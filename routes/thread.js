const express = require('express');
const router = express.Router();
// console.log("thread routes")

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const hasRights = require('../middleware/hasRights');
const threadCtrl = require('../controllers/thread');

router.post('/create', auth, multer, threadCtrl.create);

//add auth 
router.get('/:id', threadCtrl.getOne);
router.get('/', threadCtrl.getAll);
router.get('/getThreadsFromUser/:id', auth, threadCtrl.getAllFromUser);
router.get('/getThreadFromUserComments/:id', auth, threadCtrl.getAllFromUserComments);
router.delete('/:id', auth, threadCtrl.delete); //add hasRights
router.put('/modify/:id', auth, hasRights, multer, threadCtrl.modify);

// router.post('/:id/likes', threadCtrl.likes);

module.exports = router;