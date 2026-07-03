import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { calculateLcmResult } from "./lcm-math.js";
const app = express();
const port = Number(process.env.PORT) || 3040;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("lcm-calculator.ejs", { Result: "N/A" });
});

app.post("/", (req, res) => {
  res.render("lcm-calculator.ejs", {
    Result: calculateLcmResult(req.body.vA, req.body.vB),
  });
});

app.listen(port, () => {
  console.log(`EJS LCM app running at http://localhost:${port}`);
});
