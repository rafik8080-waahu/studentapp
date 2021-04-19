const { Router } = require("express");
const express = require("express");

const { createTrainee,
     getAllTrainees,
      getSingleTrainee,
      updateTrainee
     } = require("../controllers/traineesController");

const router = express.Router();

router.route("/").post(createTrainee);
router.route("/:_id").get(getSingleTrainee).put(updateTrainee)

module.exports = router;
