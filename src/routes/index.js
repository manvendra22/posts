const express = require("express");
const router = express.Router();

const controller = require("../controllers");

router.get('/api/posts', controller.fetchPost);

module.exports = router;