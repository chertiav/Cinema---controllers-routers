const Router = require('express');
const studioController = require('../controllers/studioController');
//================================

const router = new Router();

router.route('/studios')
	.post(studioController.createStudio)
	.get(studioController.getStudios)
	.put(studioController.updateStudio);

router.route('/studios/:id')
	.get(studioController.getOneStudio)
	.delete(studioController.deleteStudio);

module.exports = router;