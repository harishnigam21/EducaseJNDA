import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Server is running fine");
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
