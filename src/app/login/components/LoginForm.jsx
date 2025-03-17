"use client";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import SocialLogin from "./SocialLogin";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (res?.ok) {
        router.push('/')
        form.reset();
        toast.success("Log in Successfully");

      }
      // console.log({ email, password });
    } catch (error) {
      console.log(error);
      toast.error("Failed to Log in");
    }
  };
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mt-12">
      <h2 className="text-2xl font-bold text-center mt-4 mb-12">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full p-3 border border-gray-300 rounded-lg my-4"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your password"
          className="w-full p-3 border border-gray-300 rounded-lg my-4"
        />
        <button
          type="submit"
          className="w-full bg-[#FF3811] text-white py-3 my-4 rounded-lg text-lg font-semibold hover:bg-[#FF3811]/80"
        >
          Sign In
        </button>
      </form>
      <p className="text-center my-4">Or Sign In with</p>
      <SocialLogin />
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link href="/signUp" className="text-[#FF3811] font-semibold">
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
