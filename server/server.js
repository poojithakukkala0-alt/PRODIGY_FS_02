const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const app = express();

connectDB();

// Fixed: Explicitly allow your frontend domain to prevent CORS blocks
app.use(cors({
  origin: "https://prodigy-fs-02-1-gan7.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`💻 Server running on port ${PORT}`);
});
