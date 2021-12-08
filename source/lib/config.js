import dotenv from "dotenv";

dotenv.config();

export const ENV = process.env.ENV || "PRODUCTION";

export const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
export const RABBITMQ_URL = process.env.RABBITMQ_URL;
export const REDIS_URL = process.env.REDIS_URL;

export const GQL_ENDPOINT = process.env.GQL_ENDPOINT;
export const GQL_AUTH_TOEKN = process.env.GQL_AUTH_TOEKN;

export const SERVER_TOKEN = process.env.SERVER_TOKEN;
export const SERVER_PORT = process.env.SERVER_PORT;
export const SERVER_USE_REDIS_CACHE = process.env.SERVER_USE_REDIS_CACHE === 'true';
export const SERVER_REDIS_CACHE_TTL = parseInt(process.env.SERVER_REDIS_CACHE_TTL || '0');
