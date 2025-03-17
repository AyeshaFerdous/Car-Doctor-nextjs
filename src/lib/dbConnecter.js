import { MongoClient, ServerApiVersion } from 'mongodb';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const dbName = {
    servicesCollection: "services",
    usersCollection: "users",
    bookingCollection : "bookings"
  };

export default async function dbConnect(collection) {
    const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.isdx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  
    try {
      console.log("connected to mongodb");
      return client.db("car-doctor").collection(collection);
    } catch (error) {
      console.error("Error connecting to MongoDB", error);
      throw new Error("Database connection failed");
    }
  }
