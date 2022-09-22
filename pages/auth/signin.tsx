import { getProviders, getSession, signIn } from "next-auth/react";

export default function SignIn({ providers }: any) {
  return (
    <>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const session = await getSession(context);
  return {
    props: { providers, session },
  };
}
