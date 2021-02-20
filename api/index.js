const { Router } = require("express");
const router = Router();

// NOTE : Handles all routes within this file and then exporst to the default app.js. This helps to keep my file neat and consistent.

const userRoute = require("./routes/users.route");

router.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome to my api" });
});

router.use(userRoute);

module.exports = router;
