import { getProviders, getSession, signIn } from "next-auth/react";
import Image from "next/image";
import Logo from "../../assets/images/google-logo.png";

export default function SignIn({ providers }: any) {
  return (
    <div className="grid h-[80vh] place-items-center ">
      <div className="relative w-auto my-6 mx-auto min-w-[80%] md:min-w-[60%] xl:min-w-[25%] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-slate-700">upstart</h1>
        <p className="text-center w-4/5 mt-2 leading-snug">
          Daily check-in and task management for remote and asynchronous teams
        </p>

        <button
          className="border-solid border border-slate-300 rounded text-sm py-2 px-10 mt-5 flex justify-center items-center"
          onClick={() =>
            signIn(providers.google.id, {
              callbackUrl: `${window.location.origin}/`,
            })
          }
        >
          <Image
            src={Logo}
            alt="Google 'G' Logo"
            width={17}
            height={17}
            layout="fixed"
          />
          <p className="pl-2 text-slate-700"> Log in with Google</p>
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: `/`,
      },
    };
  }
  return {
    props: { providers, session },
  };
}
