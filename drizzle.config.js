/** @type { import('drizzle-kit').config } */

export default {
    dialect: "postgresql",
    schema: "./src/configs/schema.js",
    dbCredentials: {
        url: "postgresql://skullai_owner:E9ROscC6fAQw@ep-round-block-a12d1j88.ap-southeast-1.aws.neon.tech/skullai?sslmode=require",
    }
};