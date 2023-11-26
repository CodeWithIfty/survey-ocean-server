const { deleteUser } = require("../../api/users/controllers/deleteUser");
const getUserRole = require("../../api/users/controllers/getUserRole");
const getUsers = require("../../api/users/controllers/getUsers");
const saveUser = require("../../api/users/controllers/saveUser");
const {
  updateUserRole,
} = require("../../api/users/controllers/updateUserRole");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.put("/users/:email", saveUser);

router.get("/user/:email", verifyToken, getUserRole);

router.get("/users", verifyToken, verifyAdmin, getUsers);

router.put("/updateUserRole", verifyToken, verifyAdmin, updateUserRole);

router.delete("/delete-user/:id", verifyToken, verifyAdmin, deleteUser);
module.exports = router;
