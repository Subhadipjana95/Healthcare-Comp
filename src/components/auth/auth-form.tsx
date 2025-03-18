import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (to be implemented later)
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{mode === "login" ? "Login" : "Sign Up"}</CardTitle>
        <CardDescription>
          {mode === "login"
            ? "Enter your credentials to access your account"
            : "Create an account to get started"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-md border p-2"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full rounded-md border p-2"
              required
            />
          </div>
          {mode === "signup" && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full rounded-md border p-2"
                required
              />
            </div>
          )}
          <Button type="submit" className="w-full">
            {mode === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <a href="/signup" className="text-primary hover:underline">
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="/login" className="text-primary hover:underline">
                Login
              </a>
            </>
          )}
        </p>
      </CardFooter>
    </Card>
  );
}