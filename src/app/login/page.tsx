"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Key } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { HomeButton } from "@/components/ui/HomeButton";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (username === "admin" && password === "password") {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed top-4 right-4">
        <HomeButton />
      </div>
      <div className="min-h-screen theme-gradient-bg flex items-center justify-center p-5">
        <Card>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Please sign in to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              label="Username"
              icon={<User className="h-5 w-5 text-gray-400" />}
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <Input
              label="Password"
              icon={<Key className="h-5 w-5 text-gray-400" />}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error}
              required
            />

            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Forgot your password?{" "}
              <a href="#" className="text-green-500 hover:text-green-400">
                Reset it here
              </a>
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default LoginPage; 