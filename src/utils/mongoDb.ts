import { Db, MongoClient } from "mongodb";
let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.NEXT_PUBLIC_MONGO_URI || "mongodb+srv://client:client@cluster0.h4wbx.mongodb.net/undefined?retryWrites=true&w=majority&appName=Redefine", {});
    await client.connect();
  }
  if (!db) {
    db = client.db("grapesJsData");
  }

  return { db };
}
