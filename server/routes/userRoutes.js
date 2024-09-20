const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Registration route
router.post("/register", async (req, res) => {});

router.post("/login", async (req, res) => {});

module.exports = router;
