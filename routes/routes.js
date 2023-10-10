const express = require("express");
const router = express.Router();
//-- ****************  Middleware Imports **************** --// 
const { verifyToken } = require("../middleware/AuthMiddleware");
const upload = require("../middleware/MulterMiddleware");
//-- *********** Import Controller Functions *********** --//
const { postLogin } = require("../controllers/dashboard/AuthController");
const { update_user } = require("../controllers/dashboard/UserController");

//! *** Admin Routes *** !//
router.post("/login", postLogin);  /*** Login User ***/
router.route("/user/:id")
  .patch(upload.single("profile"), update_user)  /*** Update Existing User ***/
router.get("/", (req, res) => { res.send("<h1>Your Internet Provider</h1>") });  /*** Main Route ***/
// -- /*** Export all Routes ***/ -- // 
module.exports = router;
