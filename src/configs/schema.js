import { boolean, serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', 255).notNull(),  // Added length for varchar
    email: varchar('email', 255).notNull(), // Added length for varchar
    imageUrl: varchar('imageUrl', 255).notNull(), // Added length for varchar
    subscription: boolean('subscription').notNull().default(false),
});
