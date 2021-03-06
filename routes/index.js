const express = require("express");
const router = express.Router();



router.get('/', (req, res) => res.render('index'));
router.get("/login", (req, res) => res.render("login", {page: "login"}));
router.get("/signup", (req, res) => res.render("signup", {page: "signup"}));
router.get("/welcome", (req, res) => res.render("welcome", {page: "welcome"}));


router.get("/petinfo/mypet", (req, res) => res.render("mypet", {page: "mypet"}));
router.get("/petinfo/list", (req, res) => res.render("petinfolist", {page: "petinfolist"}));
router.get("/petinfo/collar", (req, res) => res.render("petcollar", {page: "petcollar"}));    
router.get("/petinfo/harness", (req, res) => res.render("petharness", {page: "petharness"}));
router.get("/petinfo/wear", (req, res) => res.render("petwear", {page: "petwear"}));


router.get("/admin/login", (req, res) => res.render("admin_login", {page: "admin_login"}));
router.get("/admin/list", (req, res) => res.render("admin_list", {page: "admin_list"}));
router.get("/admin/collar", (req, res) => res.render("admin_collardata", {page: "admin_collardata"}));
router.get("/admin/wear", (req, res) => res.render("admin_weardata", {page: "admin_weardata"}));
router.get("/admin/harness", (req, res) => res.render("admin_harnessdata", {page: "admin_harnessdata"}));




module.exports = router;