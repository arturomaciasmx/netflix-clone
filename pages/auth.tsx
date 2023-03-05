import Input from "@/components/Input";
import React, { useCallback, useState } from "react";

function auth() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
  }, []);
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
              className="bg-red-600 py-3 mt-6 text-white rounded-md w-full 
            hover:bg-red-700"
            >
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
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
