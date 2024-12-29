// import { drizzle } from "drizzle-orm/postgres-js";
// import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
// import postgres from "postgres";

// // Database client setup
// export const client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
// export const db = drizzle(client);

// // User table schema
// export const users = pgTable("User", {
//   id: serial("id").primaryKey(),
//   email: varchar("email", { length: 64 }).unique(),
//   password: varchar("password", { length: 64 }),
//   first_name: varchar("first_name", { length: 50 }),
//   last_name: varchar("last_name", { length: 50 }),
// });

// // Post table schema
// export const posts = pgTable("Post", {
//   id: serial("id").primaryKey(),
//   title: varchar("title", { length: 255 }),
//   content: text("content"),
//   created_at: timestamp("created_at").defaultNow(),
// });
