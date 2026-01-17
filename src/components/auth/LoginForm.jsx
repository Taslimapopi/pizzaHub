"use client";

import Link from "next/link";

import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import { SocialButtons } from "./SocialButton";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const params = useSearchParams();
  

  const router = useRouter();
  const callback = params.get("callbackUrl") || "/";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      // redirect: false,
      password: form.password,
      email: form.email,
      callbackUrl: params.get("callbackUrl") || "/",
    });

    console.log(result);

    if (!result.ok) {
      Swal.fire("error", "password not match", "error");
    } else {
      Swal.fire("success", "welcome to kidz", "success");
     
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />

            <input
              onChange={handleOnChange}
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <SocialButtons />

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link href={`/register?callbackUrl=${callback}`} className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
