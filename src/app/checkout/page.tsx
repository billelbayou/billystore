import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ShowcaseMessage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div
      className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700"
      role="alert"
    >
      <h3 className="font-bold text-lg mb-2">This is Just a Showcase</h3>
      <p>
        Thank you for exploring our game store! Please note that this website is
        a portfolio project and no real transactions can be made. You won’t be
        able to purchase any games here, as it’s designed solely to showcase my
        web development skills.
      </p>
      <p className="mt-2">
        If you have any questions or feedback, feel free to reach out!
      </p>
    </div>
  );
}
