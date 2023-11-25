const getUserRole = require("../../api/users/controllers/getUserRole");
const saveUser = require("../../api/users/controllers/saveUser");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.put("/users/:email", saveUser);

router.get("/user/:email", verifyToken, getUserRole);

module.exports = router;
