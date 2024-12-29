// "use server";

// import { signIn, signOut } from "@/auth";
// import { getUser, createUser } from "@/database/db";
// import { AuthError } from "next-auth";
// import { redirect } from "next/navigation";

// export async function getFormData(prevState: unknown, formData: FormData) {
//   const name = formData.get("name");
//   if (name) {
//     return { message: `Hello, ${name}!` };
//   } else {
//     return { error: "Name is requierd" };
//   }
// }

// export async function login(prevState: unknown, formData: FormData) {
//   try {
//     await signIn("credentials", {
//       email: formData.get("email") as string,
//       password: formData.get("password") as string,
//     });
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return { error: "Invalid email or password." };
//         default:
//           return { error: "An error occurred." };
//       }
//     }
//     throw error;
//   }
// }

// export async function register(prevState: unknown, formData: FormData) {
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;
//   const firstName = formData.get("firstName") as string;
//   const lastName = formData.get("lastName") as string;

//   const user = await getUser(email);

//   if (user.length > 0) {
//     return { error: "User already exists" }; // Return error message
//   }

//   await createUser(email, password, firstName, lastName);
//   redirect("/login"); // Redirect on success
// }

// export async function signout() {
//   await signOut();
// }
