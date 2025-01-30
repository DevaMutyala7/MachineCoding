import React, { createContext, useContext, useState } from "react";
import { emails, passwords } from "views/TwoStepLogin/data";
import { Step } from "views/TwoStepLogin/types";

type AuthContextType = {
  step: Step;
  email: string;
  password: string;
  loading: boolean;
  error: Error | null;
  moveToPasswordForm: () => void;
  moveToHome: () => void;
  moveToEmail: () => void;
  updateEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updatePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

function AuthContextProvider({ children }: { children: React.ReactElement }) {
  const [step, setStep] = useState<Step>(Step.Email);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const moveToEmail = () => {
    setStep(Step.Email);
  };

  const moveToPasswordForm = () => {
    if (email) {
      if (emails.includes(email)) {
        setLoading(true);
        setTimeout(() => {
          setStep(Step.Password);
          setLoading(false);
        }, 3000);
      } else {
        const wrongEmail = new Error("Enter valid Email");
        setError(wrongEmail);
      }
    } else {
      let err = new Error("Please Enter Email");
      setError(err);
    }
  };

  const moveToHome = () => {
    if (password) {
      if (passwords[email as keyof typeof passwords] === password) {
        setLoading(true);
        setTimeout(() => {
          setStep(Step.Home);
          setLoading(false);
        }, 3000);
      } else {
        const WrongPassword = new Error("Enter valid Password");
        setError(WrongPassword);
      }
    } else {
      let err = new Error("Please Enter Password");
      setError(err);
    }
  };

  const value = {
    step,
    email,
    password,
    loading,
    error,
    moveToPasswordForm,
    updateEmail,
    updatePassword,
    moveToHome,
    moveToEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  let context = useContext(AuthContext);
  if (context) {
    return context;
  }

  throw new Error("Should be called in the boundaries of AuthContext");
}

export { AuthContextProvider, useAuthContext };
