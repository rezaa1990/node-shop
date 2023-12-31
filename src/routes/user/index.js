const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get(
  '/',
  controller.dashboard
);

router.get(
  '/me',
  controller.me
);

router.put(
  '/updateuser/:id',
  controller.updateUser
);

router.put(
  '/deletebasket',
  controller.removeFromBasket
);

module.exports = router;