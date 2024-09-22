import Link from "next/link";

export default function SignIn() {
  return (
    <Link href={"/login"} className="w-32 h-10 rounded-lg flex justify-center items-center bg-primary">
      Sign In
    </Link>
  );
}
