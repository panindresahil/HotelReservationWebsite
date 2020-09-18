import express from "express";
import mongoose from "mongoose";
import config from "./config";
import composeHotel from "./routes/hotelRoute";
import bodyParser from "body-parser";
import path from "path";


const mongodbURL = config.MONGODB_URL;
const port = config.PORT

mongoose.connect(mongodbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})

const app = express();

app.use(bodyParser.json());
app.use("/api/hotels",composeHotel);
app.use('/uploads',express.static(path.join(__dirname,"/../uploads")));
app.use(express.static(path.join(__dirname,"/../frontend/build")));

app.listen(port, () => {console.log(`Server hosted at ${port}`)});