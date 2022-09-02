const Router = require('express');
const actorController = require('../controllers/actorController');
//================================

const router = new Router();

router.route('/actors')
	.post(actorController.createActor)
	.get(actorController.getActors)
	.put(actorController.updateActor);

router.route('/actors/:id')
	.get(actorController.getOneActor)
	.delete(actorController.deleteActor);

module.exports = router;