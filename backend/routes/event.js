const express = require("express");
const router = express.Router();

router.post("/", (req,res) => {
    res.send("Create a new event");
})

router.get("/", (req,res) => {
    res.send("Fetch all events");
})

module.exports = router;