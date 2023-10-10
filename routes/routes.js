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
  .patch(upload.single("image"), update_user)  /*** Update Existing User ***/
router.get("/", (req, res) => { res.send("<h2>Dashboard</h2>") });  /*** Main Route ***/
// -- /*** Export all Routes ***/ -- // 
module.exports = router;
