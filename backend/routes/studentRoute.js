const express = require("express");
const router = express.Router();

const {
  createStudent,
  showAllStudents,
  show,
} = require("../controllers/studentController");

router.post("/createStudent", createStudent);
router.get("/showAll", showAllStudents);
router.get("/show/:id", show); // Specify the URL parameter 'id' in the route

module.exports = router;
