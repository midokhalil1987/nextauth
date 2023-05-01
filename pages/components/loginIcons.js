import { signIn, signOut, useSession } from "next-auth/react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

export default function LoginIcons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button className="px-4 py-2" type="button" onClick={() => signOut()}>
          Sign Out
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => signIn()}
          className="border-2 border-gray-200 rounded-full p-3 mx-1"
        >
          <FaFacebookF className="text-lg text-black" />
        </button>
        <button
          onClick={() => signIn("")}
          className="border-2 border-gray-200 rounded-full p-3 mx-1"
        >
          <FaGithub className="text-lg text-black" />
        </button>
        <button
          onClick={() => signIn("")}
          className="border-2 border-gray-200 rounded-full p-3 mx-1"
        >
          <FaGoogle className="text-lg text-black" />
        </button>
      </>
    );
  }
}
