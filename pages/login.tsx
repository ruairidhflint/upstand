import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

const Login: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <h2>Welcome, {session?.user?.email} </h2>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Sign in</h2>
        <button onClick={() => signIn()}>Auth with Google</button>
      </div>
    );
  }
};

export default Login;
