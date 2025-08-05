import { MongooseCache } from "../../shared/interfaces.types";
import mongoose from "mongoose";

const urlDB: string | undefined = process.env.DB_URL;

if (!urlDB) {
  throw new Error("Add Mongo URI to .env.local");
}
declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached = global.mongooseCache || {
  conn: null,
  promise: null,
};

global.mongooseCache = cached;

const connectDB = async () => {
  if (cached.conn) return cached.conn;
  if (!cached.promise)
    cached.promise = mongoose.connect(urlDB).then((mongoose) => mongoose);

  cached.conn = await cached.promise;
  return cached.conn;
};
export default connectDB;
