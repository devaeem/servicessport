const express = require("express");
const router = express.Router();



const {
    listtest,
  } = require("../Controllers/testControllers");

  router.get("/test",  listtest);
  

module.exports = router;