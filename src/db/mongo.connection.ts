import mongoose from "mongoose";

async function connectMongo() {
  try {
    if (mongoose.connections[0].readyState) return true;

    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: process.env.MONGO_DB_NAME!,
    });
    console.log("Mongo DB connected successfully!");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect Mongo DB!");
  }
}

export default connectMongo;
