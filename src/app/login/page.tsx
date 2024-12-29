// "use client";
// import { useActionState } from "react";
// import { login, register } from "@/lib/actions";

// export default function AuthForm() {
//   const [loginState, loginAction, isLoginPending] = useActionState(
//     login,
//     undefined
//   );
//   const [registerState, registerAction, isRegisterPending] = useActionState(
//     register,
//     undefined
//   );

//   return (
//     <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
//       <div className="z-10 flex w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
//         {/* Login Form */}
//         <div className="flex flex-col w-1/2 border-r border-gray-200 bg-white">
//           <div className="flex flex-col items-center justify-center space-y-3 px-4 py-6 pt-8 text-center sm:px-16">
//             <h3 className="text-xl font-semibold">Sign In</h3>
//             <p className="text-sm text-gray-500">
//               Use your email and password to sign in
//             </p>
//           </div>
//           <form
//             action={loginAction}
//             className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
//           >
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-xs text-gray-600 uppercase"
//               >
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="user@acme.com"
//                 autoComplete="email"
//                 required
//                 className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-xs text-gray-600 uppercase"
//               >
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
//               />
//             </div>
//             {loginState?.error && (
//               <p className="text-red-500 text-xs">{loginState.error}</p>
//             )}
//             <button
//               type={isLoginPending ? "button" : "submit"}
//               aria-disabled={isLoginPending}
//             >
//               Sign In
//             </button>
//           </form>
//         </div>

//         {/* Register Form */}
//         <div className="flex flex-col w-1/2 bg-white">
//           <div className="flex flex-col items-center justify-center space-y-3 px-4 py-6 pt-8 text-center sm:px-16">
//             <h3 className="text-xl font-semibold">Sign Up</h3>
//             <p className="text-sm text-gray-500">Create a new account</p>
//           </div>
//           <form
//             action={registerAction}
//             className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
//           >
//             <div>
//               <label
//                 htmlFor="register-email"
//                 className="block text-xs text-gray-600 uppercase"
//               >
//                 Email Address
//               </label>
//               <input
//                 id="register-email"
//                 name="email"
//                 type="email"
//                 placeholder="user@acme.com"
//                 autoComplete="email"
//                 required
//                 className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="register-password"
//                 className="block text-xs text-gray-600 uppercase"
//               >
//                 Password
//               </label>
//               <input
//                 id="register-password"
//                 name="password"
//                 type="password"
//                 required
//                 className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
//               />
//             </div>
//             {registerState?.error && (
//               <p className="text-red-500 text-xs">{registerState.error}</p>
//             )}
//             <button
//               type={isRegisterPending ? "button" : "submit"}
//               aria-disabled={isRegisterPending}
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
