const express = require("express");
const router = express.Router();



const {
    listtest,
    createtest
  } = require("../Controllers/testControllers");

  router.get("/test",  listtest);
  router.post("/test",  listtest);

module.exports = router;