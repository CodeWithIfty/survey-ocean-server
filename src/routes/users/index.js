const createPaymentIntent = require("../../api/users/controllers/createPaymentIntent");
const { deleteUser } = require("../../api/users/controllers/deleteUser");
const getAllPayments = require("../../api/users/controllers/getAllPayments");
const getUserRole = require("../../api/users/controllers/getUserRole");
const getUsers = require("../../api/users/controllers/getUsers");
const postPaymentInfo = require("../../api/users/controllers/postPaymentInfo");
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

router.put("/updateUserRole", verifyToken, updateUserRole);

router.delete("/delete-user/:id", verifyToken, verifyAdmin, deleteUser);

router.post("/create-payment-intent", verifyToken, createPaymentIntent);

router.post("/post-user-payment-details", verifyToken, postPaymentInfo);

router.get("/payments", verifyToken, verifyAdmin, getAllPayments);

module.exports = router;
