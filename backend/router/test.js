const express = require("express");

router = express.Router();

router.post("/test", (req, res) => {

    const zadd = req.body.zadd;

    res.send(zadd);

})



exports.router = router;