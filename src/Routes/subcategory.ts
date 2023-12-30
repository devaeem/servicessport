import express from "express";
const router = express.Router();
const {
     sublistcategory,
    subcreatecategory,
    subupdatecategory,
    subdeletecategory,
    subactivecategory,
    
  } = require("../Controllers/subcategoryControllers.");

  router.get("/subcategory",  sublistcategory);
  router.post("/subcategory",  subcreatecategory);
  router.put("/subcategory/:id",  subupdatecategory);
  router.put("/subcategorys/:id",  subdeletecategory);
  router.put("/subcategoryactive/:id", subactivecategory);
module.exports = router;