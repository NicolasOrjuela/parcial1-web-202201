const { response, request } = require('express');
const express = require('express');
const { getUser } = require('./controller');
const router = express.Router();

router.get('/:username', async function (req, res, next) {
  const result = await getUser(req.params.username);
  res.json(result);
});

module.exports = router;
