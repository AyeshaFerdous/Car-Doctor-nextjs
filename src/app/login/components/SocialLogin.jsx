"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (provider) => {
    signIn(provider, { redirect: false });
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      toast.success("Login Successfull");
      router.push("/");
    }
  }, [session?.status]);
    return (
        <div className="flex justify-center space-x-4">
      {/* Google Login Button */}
      <button
        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
        aria-label="Login with Google"
        onClick={() => handleSocialLogin("google")}
      >
        <FcGoogle className="text-xl" />
      </button>

      {/* Facebook Login Button */}
      <button
        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
        aria-label="Login with Facebook"
        onClick={() => handleSocialLogin("facebook")}
      >
        <FaFacebook className="text-blue-600 text-xl" />
      </button>

      {/* LinkedIn Login Button */}
      <button
        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
        aria-label="Login with LinkedIn"
        onClick={() => handleSocialLogin("linkedin")}
      >
        <FaGithub className="text-black-700 text-xl" />
      </button>
    </div>
    );
};

export default SocialLogin;