import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("running");
});
// var name="Priya"
// app.get("/getname", (req, res) => {
//   res.send(name);
// });
// app.post("/setname", (req, res) => {
//     var data=req.body
//     console.log(data);
// name=data.name
    
//   res.send("Success");
// });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
