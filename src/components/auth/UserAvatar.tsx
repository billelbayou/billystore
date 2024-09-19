import { auth } from "../../auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <h2>{session.user.name}</h2>
    </div>
  );
}
