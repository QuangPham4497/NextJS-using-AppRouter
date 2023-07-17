"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-max flex flex-col gap-5 p-5 rounded-lg border-orange-600 border-solid border-2 bg-orange-400"
      >
        <div className="flex justify-between w-max h-auto">
          <label className="w-24 h-auto">Email:</label>
          <input
            type="text"
            placeholder="email"
            required
            className="text-black"
          />
        </div>
        <div className="flex justify-between w-max h-auto">
          <p className="w-24 h-auto">Password:</p>
          <input
            type="password"
            placeholder="password"
            required
            className="text-black"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="w-max p-1 text-center rounded-lg bg-orange-600 border-2 border-solid border-orange-600">
            Login
          </button>
        </div>
      </form>

      <div>
        <button
          onClick={() => signIn("google")}
          className="w-max p-1 text-center rounded-lg bg-orange-600 border-2 border-solid border-orange-600"
        >
          Login with Google
        </button>
      </div>
      <Link
        href="/dashboard/register"
        className="w-max p-1 text-center rounded-lg bg-orange-600 border-2 border-solid border-orange-600"
      >
        To Register Page
      </Link>
    </div>
  );
};

export default Login;
