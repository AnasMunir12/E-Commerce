import React from "react";

import Remote from "../../images/xremote.png";
import Keyboard from "../../images/keyboard.png";
import Lcd from "../../images/LCD.png";
import Coat from "../../images/coat.png";
import Bag from "../../images/duffle_bag.png";
import Cpu from "../../images/rgbcpu.png";
import Shelf from "../../images/bookshelf.png";
import Dogfood from "../../images/Explore/Dogfood.png";
import Dslr from "../../images/Explore/camera.png";
import Laptop from "../../images/Explore/Laptop.png";
import Curulogy from "../../images/Explore/curology.png";
import Car from "../../images/Explore/minicar.png";
import Soccershoes from "../../images/Explore/shoes.png";
import Xremote from "../../images/Explore/X_remote.png";
import Jacket from "../../images/Explore/jacket.png";

export const  allProductss = [
    {  id: "flash-1",      img: Remote,    name: "HAVIT HV-G92 Gamepad",    price: 120,    discount: "-40%",  category: "gaming"   },
    { id: "flash-2",   img: Keyboard,   name: "AK-900 Wired Keyboard",   price: 960,discount: "-20%",  category: "computer"  },
    { id: "flash-3",    img: Lcd,     name: "IPS LCD Gaming Monitor",  price: 370,  discount: "-10%",  category: "computer" }, 
      { id: "flash-4",     img: Keyboard,     name: "AK-900 Wired Keyboard",    price: 960,    discount: "-20%",  category: "gaming" },
    {  id: "flash-5",   img: Remote,    name: "HAVIT HV-G92 Gamepad", price: 120, discount: "-40%", category: "computer"  },
    { id: "flash-6",    img: Lcd,  name: "IPS LCD Gaming Monitor",price: 370, discount: "-10%",  category: "computer"  },
    { id: "sell-1", img: Coat, name: "The north coat", price: 260 , category: "clothing"  },
    { id: "sell-2", img: Bag, name: "Gucci duffle bag", price: 960 , category: "clothing" },
    { id: "sell-3", img: Cpu, name: "RGB liquid CPU Cooler", price: 160 , category: "accessories" },
    { id: "sell-4", img: Shelf, name: "Small BookShelf", price: 360 , category: "furniture" },
     { id: "explore_1", img: Dogfood, name: "Breed Dry Dog Food", price: 100 , category: "Animal food"},
        { id: "explore_2",img: Dslr, name: "CANON EOS DSLR Camera", price: 360 , category: "electronic"},
        { id: "explore_3",img: Laptop, name: "ASUS FHD Gaming Laptop", price: 700 , category: "electronic"},
        { id: "explore_4",img: Curulogy, name: "Curology Product Set ", price: 500 , category: "Skin care"},
        { id: "explore_5",img: Car, name: "Kids Electric Car", price: 960, category: "electronic" },
        { id: "explore_6",img: Soccershoes, name: "Jr. Zoom Soccer Cleats", price: 1160 , category: "clothing"},
        { id: "explore_7",img: Xremote, name: "GP11 Shooter USB Gamepad", price: 860 , category: "gaming"},
        { id: "explore_8",img: Jacket, name: "Quilted Satin Jacket", price: 200 , category: "clothing"},
  ];
