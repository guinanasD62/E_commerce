//just like controller

import { Product, User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async () => {
    try{
        connectToDb()
        const users = await User.find();
        return users;
    } catch(error){
        console.log(error);
        throw new Error("Failed to fetch users.");
        //instead : res.sendStatus(500)json({ message: 'Failed to create loan', error: error.message });
    }
};

export const fetchUser = async (id) => {
   // console.log(id);
    try {
      connectToDb();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user.");
    }
  };

export const fetchProducts = async () => {
    try{
        connectToDb()
        const products = await Product.find();
        // console.log(products);
        return products;
    } catch(error){
        console.log(error);
        throw new Error("Failed to fetch products.");
        //instead : res.sendStatus(500)json({ message: 'Failed to create loan', error: error.message });
    }
};

export const fetchProduct = async (id) => {
    try {
      connectToDb();
      const product = await Product.findById(id);
      //console.log(product,'hello');
      return product;
    } catch (err) {
      console.log(err);
       throw new Error("Failed to fetch product!");
    } //wrong?
  };
  