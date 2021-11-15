import dotenv from "dotenv";

dotenv.config();

export const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
export const RABBITMQ_URL = process.env.RABBITMQ_URL;
export const REDIS_URL = process.env.REDIS_URL;

export const GQL_ENDPOINT = process.env.GQL_ENDPOINT;
export const GQL_AUTH_TOEKN = process.env.GQL_AUTH_TOEKN;
