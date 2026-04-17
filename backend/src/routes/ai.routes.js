const express = require("express");
const router = express.Router();

router.post("/review", (req, res) => {
  const { code } = req.body;

  let feedback = [];

  if (code.includes("var")) {
    feedback.push("Avoid using 'var'. Use 'let' or 'const'.");
  }

  if (!code.includes(";")) {
    feedback.push("Consider adding semicolons.");
  }

  if (code.includes("==")) {
    feedback.push("Use '===' instead of '=='.");
  }

  if (code.length < 20) {
    feedback.push("Code is too short. Add meaningful logic.");
  }

  if (feedback.length === 0) {
    feedback.push("Code looks clean. Good job!");
  }

  res.json({
    result: feedback.join("\n")
  });
});

module.exports = router;