import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import AuthLayout from "../components/AuthLayout/AuthLayout";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";

import "../styles/AuthPage.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <AuthLayout />

      <div className="auth-right">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <LoginForm key="login" onSwitch={() => setIsLogin(false)} />
          ) : (
            <RegisterForm key="register" onSwitch={() => setIsLogin(true)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
