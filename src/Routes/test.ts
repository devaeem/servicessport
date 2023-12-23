const express = require("express");
const router = express.Router();



const {
    listtest,
    createtest,
    edittest,
    deletetest,
    harddeletetest
  } = require("../Controllers/testControllers");

  router.get("/test",  listtest);
  router.post("/test",  createtest);
  router.put("/test/:id",  edittest);
  router.put("/testsoftdelete/:id",  deletetest);
  router.delete("/test/:id", harddeletetest);
module.exports = router;