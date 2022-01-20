import express from "express";

const router = express.Router();

const products = [
  {
    id: "1",
    name: "PS4",
    category: "Gaming",
    description: "Playstation 4 gaming console",
    imageUrl: "#",
    price: "$799.99",
  }
];

router.get('/', (req,res) =>{
        console.log(products);
        res.send(products);
});

export default router;