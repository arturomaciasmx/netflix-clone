import Input from "@/components/Input";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function auth() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("api/register", {
        email,
        username,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, username, password, login]);

  return (
    <div className="w-full h-full relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 mt-2 mx-4 lg:w-2/5 lg:max-w-md w-full">
            <h2 className="text-white text-4xl mb-8">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id={"username"}
                  onChange={(ev: any) => setUsername(ev.target.value)}
                  label={"Username"}
                  value={username}
                />
              )}
              <Input
                id={"email"}
                onChange={(ev: any) => setEmail(ev.target.value)}
                label={"Email"}
                value={email}
              />
              <Input
                id={"password"}
                onChange={(ev: any) => setPassword(ev.target.value)}
                label={"Password"}
                value={password}
                type={"Password"}
              />
            </div>
            <button
              onClick={variant == "login" ? login : register}
              className="bg-red-600 py-3 mt-6 text-white rounded-md w-full 
            hover:bg-red-700"
            >
              {variant === "login" ? "Login" : "Sign Up"}
            </button>

            <div className="flex mt-8 justify-center gap-4">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              >
                <FaGithub size={30} />
              </div>
            </div>

            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white hover:underline cursor-pointer ml-1"
              >
                {variant === "login" ? "crate an account" : "Sign in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default auth;
