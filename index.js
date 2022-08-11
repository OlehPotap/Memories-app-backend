import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/posts.js";

const app = express();

app.use("/posts", postRouter);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const MONGO_URL =
  "mongodb+srv://memories-user:1234567890@cluster0.y7ejw8z.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;
// process.evn.PORT ||

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });

// mongoose.set("useFindAndModify", false);
