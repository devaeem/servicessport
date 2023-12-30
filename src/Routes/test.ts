import express from "express";
const router = express.Router();



const {
    listtest,
    createtest,
    edittest,
    deletetest,
    
  } = require("../Controllers/testControllers");

  router.get("/test",  listtest);
  router.post("/test",  createtest);
  router.put("/test/:id",  edittest);
  router.put("/testdelete/:id",  deletetest);
  //router.delete("/test/:id", harddeletetest);
module.exports = router;