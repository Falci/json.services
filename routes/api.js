var express = require('express');
var router = express.Router();
var api = require('../lib/api')

router.get('/', api.run);
router.get('/:service', api.run);

module.exports = router;
