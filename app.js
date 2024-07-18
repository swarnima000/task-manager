import express from "express"
import 'dotenv/config';
import dbConnect from "./dbConnect.js";
import cors from "cors"
import taskRoutes from "./routes/taskRoutes.js";
import notFound from "./middleware/notFound.js";

const app= express()
app.use(express.json())
app.use(cors())

const port= process.env.PORT || 5000
app.get('/',(req,res)=>{
  res.send("Task manager API")
})

app.use("/api/v1/tasks",taskRoutes);
app.use(notFound);

;(
  async()=>{
    await dbConnect(process.env.MONGO_URL);
    console.log('database connected :)')
    app.listen(port,console.log('Server is running...'))
  }
)();