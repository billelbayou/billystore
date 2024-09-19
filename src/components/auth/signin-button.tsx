import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className="w-32 h-10 rounded-lg bg-primary">
        Sign In
      </button>
    </form>
  );
}
