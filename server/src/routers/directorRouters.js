const Router = require('express');
const directorController = require('../controllers/directorController');
//================================

const router = new Router();

router.route('/directors')
	.post(directorController.createDirector)
	.get(directorController.getDirectors)
	.put(directorController.updateDirector);

router.route('/directors/:id')
	.get(directorController.getOneDirector)
	.delete(directorController.deleteDirector);

module.exports = router;