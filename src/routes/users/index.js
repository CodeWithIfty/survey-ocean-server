const saveUser = require("../../api/users/controllers/saveUser");

const router = require("express").Router();

router.put("/users/:email", saveUser);

module.exports = router;
