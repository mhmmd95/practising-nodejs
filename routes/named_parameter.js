const express = require('express');
const router = express.Router();

router.get('/user/:name', (req, res) => {
    res.end(`Hello ${req.params.name}`);
});

module.exports = router;