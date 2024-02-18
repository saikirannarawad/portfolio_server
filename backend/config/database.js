import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "portfolio", 
    })
    .then((c) => {
      console.log(`Mongodb connected to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};