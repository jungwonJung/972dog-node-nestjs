const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get("/login", (req, res) => res.render("login", {page: "login"}));
router.get("/signup", (req, res) => res.render("signup", {page: "signup"}));
router.get("/petinfo/signup", (req, res) => res.render("mypet", {page: "mypet"}));
router.get("/petinfo/list", (req, res) => res.render("petinfolist", {page: "petinfolist"}));

module.exports = router;