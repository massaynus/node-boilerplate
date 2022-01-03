import dotenv from "dotenv";

dotenv.config();

export const ENV = process.env.ENV || "DEV";
