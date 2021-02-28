const express = require("express");
const router = express.Router();



router.get('/', (req, res) => res.render('index'));
router.get("/login", (req, res) => res.render("login", {page: "login"}));
router.get("/signup", (req, res) => res.render("signup", {page: "signup"}));
router.get("/welcome", (req, res) => res.render("welcome", {page: "welcome"}));
router.get("/petinfo/mypet", (req, res) => res.render("mypet", {page: "mypet"}));
router.get("/petinfo/list", (req, res) => res.render("petinfolist", {page: "petinfolist"}));
router.get("/admin/login", (req, res) => res.render("admin_login", {page: "admin_login"}));


module.exports = router;