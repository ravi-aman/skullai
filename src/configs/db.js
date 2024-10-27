const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-serverless');

if (!process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL) {
    throw new Error("Environment variable NEXT_PUBLIC_DRIZZLE_DATABASE_URL is not defined");
}

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
export const db = drizzle({ client: sql });
