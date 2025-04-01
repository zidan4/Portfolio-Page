import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to My Portfolio 🚀</h1>

      {session ? (
        <>
          <p className="mt-4">Hello, {session.user?.name}!</p>
          <button onClick={() => signOut()} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </>
      ) : (
        <button onClick={() => signIn("google")} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Sign in with Google
        </button>
      )}
    </main>
  );
}
