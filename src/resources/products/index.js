const Router = require('@koa/router');

const router = new Router();
const controller = require('./product.controller');

router.post('/',  controller.createNew);

module.exports = router.routes();
