// "use server";
// import { eq } from "drizzle-orm";
// import { genSaltSync, hashSync } from "bcrypt-ts";
// import { client, db, users, posts } from "@/lib/utils";

// // Initialize tables only once
// async function initializeTables() {
//   await client`
//     CREATE TABLE IF NOT EXISTS "User" (
//       id SERIAL PRIMARY KEY,
//       email VARCHAR(64),
//       password VARCHAR(64),
//       first_name VARCHAR(50),
//       last_name VARCHAR(50)
//     );`;

//   await client`
//     CREATE TABLE IF NOT EXISTS "Post" (
//       id SERIAL PRIMARY KEY,
//       title VARCHAR(255),
//       content TEXT,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );`;
// }

// // Ensure tables are created at server startup
// initializeTables();

// // Create user
// export async function createUser(
//   email: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const salt = genSaltSync(10);
//   const hash = hashSync(password, salt);

//   return await db.insert(users).values({
//     email,
//     password: hash,
//     first_name: firstName,
//     last_name: lastName,
//   });
// }

// // Get user by email
// export async function getUser(email: string) {
//   return await db.select().from(users).where(eq(users.email, email));
// }

// // Create a post
// export async function createPost(title: string, content: string) {
//   return await db.insert(posts).values({
//     title,
//     content,
//   });
// }

// export async function getPosts() {
//   return await db.select().from(posts);
// }

// export async function deletePost(postId: number) {
//   if (!postId) {
//     return { error: "Post ID is required." };
//   }

//   // Delete the post from the database
//   await db.delete(posts).where(eq(posts.id, postId));
//   // Revalidate the path to update the state on the client-side
//   return { success: "Post deleted successfully." };
// }
