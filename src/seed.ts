import { User } from "./Models/MongoSchema";
import bcrypt from "bcrypt";

const seedUsers = async () => {
  try {
    // Connect with mongoDB document
    const hashedPassword = await bcrypt.hash("test1234", 10);
    await User.insertMany([
      {
        email: "test@example.com",
        password: hashedPassword,
        role: "admin"
      }
    ]);
    console.log("User seeded successfully.");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
};

export default seedUsers;