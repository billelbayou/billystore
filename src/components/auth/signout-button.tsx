import { PiSignOutBold } from "react-icons/pi";
import { signOut } from "../../auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit"><PiSignOutBold size={40} className="mt-28"/></button>
    </form>
  );
}
