const express = require("express");
const router = express.Router();

router.get("/employees", (req, res) => {
  res.json({
    respond: {
      message: "Welcome",
      employee: {
        firstName: "Raju",
        lastName: "R",
        id: "678978",
      },
    },
  });
});
router.post("/employees", (req, res) => {
  let firstName = req.body.firstName;
  res.json({ message: `Welcome ${firstName}` });
});

module.exports = router;
