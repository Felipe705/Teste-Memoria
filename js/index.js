var express = require("express");
var router = express.Router(); // criando o router

// GET pagina home 
router.get("/", function (req, res) {
    res.send("Olá Express!! 👋");
});

// GET auth
router.get("/auth", function (req, res) {
    res.send("Router do auth");
});

module.exports = router;