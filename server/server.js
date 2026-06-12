const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const app = express();

connectDB();

// Fixed: Allowed specific cross-origin domains to clear CORS blockage
app.use(cors({
  origin: ["https://onrender.com", "http://localhost:5173"],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`💻 Server running on port ${PORT}`);
});
