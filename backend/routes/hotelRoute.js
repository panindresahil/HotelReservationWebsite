import express from "express";
import Hotel from "../models/hotelModel";
import multer from "multer";
import path  from "path";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
       cb(
          null,
          file.originalname + '-' + Date.now() + path.extname(file.originalname),
       );
    },
 });

 const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
    const data = await Hotel.find({});
    res.send(data);
});

router.post('/uploads', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
 });


router.post("/", async (req, res) => {
    const { title, description, image, capacity, size, price } = req.body
    const newHotel = new Hotel({
        title, 
        description, 
        image, 
        capacity, 
        size, 
        price,
    })
    const savehotel = await newHotel.save();
    if (savehotel) {
        res.status(200).send({
            message: "New Hotel Info Created",
            data: savehotel
        });
    }
    return res.status(500).send({
        message: ' Error in Creating Hotel Info.',
    });
});

export default router;