import { signIn, providerMap } from "@/auth";

export default async function SignInPage(props: {
  searchParams: { callbackUrl: string | undefined };
}) {
  return (
    <div className="p-4 w-full h-full">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <div className="flex flex-col w-full h-full justify-center items-center">
        {Object.values(providerMap).map((provider) => (
          <form
            key={provider.id}
            action={async () => {
              "use server";
              try {
                await signIn(provider.id, {
                  redirectTo: props.searchParams?.callbackUrl ?? "",
                });
              } catch (error) {
                throw error;
              }
            }}
          >
            <button type="submit" className="w-56 h-12 rounded-lg bg-primary text-xl">
              Sign in with {provider.name}
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}
