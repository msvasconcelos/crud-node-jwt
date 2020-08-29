const express = require('express');
const router = express.Router();
const instituteController = require('../app/api/controllers/institutes');

router.get('/', instituteController.getAll);
router.post('/', instituteController.create);
router.get('/:instituteId', instituteController.getById);
router.put('/:instituteId', instituteController.updateById);
router.delete('/:instituteId', instituteController.deleteById);

module.exports = router;