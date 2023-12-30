import express from "express";
const router = express.Router();
const {
     listcategory,
    createcategory,
    updatecategory,
    deletecategory,
    activecategory,
    
  } = require("../Controllers/categoryControllers");

  router.get("/category",  listcategory);
  router.post("/category",  createcategory);
  router.put("/category/:id",  updatecategory);
  router.put("/categorys/:id",  deletecategory);
  router.put("/categoryactive/:id", activecategory);
module.exports = router;