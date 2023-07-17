"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };
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
            placeholder="name"
            required
            className="text-black"
          />
        </div>
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
            Register
          </button>
        </div>
        {err && "Something's wrong!"}
      </form>
      <Link
        href="/dashboard/login"
        className="w-max p-1 text-center rounded-lg bg-orange-600 border-2 border-solid border-orange-600"
      >
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
