import { getSession, signOut } from "next-auth/react";
import { GetServerSideProps } from "next";

export default function Admin() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <button onClick={() => signOut()} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: "/", permanent: false } };
  }
  return { props: {} };
};
