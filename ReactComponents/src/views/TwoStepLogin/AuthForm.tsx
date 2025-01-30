import { useAuthContext } from "contexts/AuthContext";
import { FormWrapper } from "./StyledElements";
import { Step } from "./types";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";
import Home from "views/Home";

export default function AuthForm() {
  const { step } = useAuthContext();

  return (
    <FormWrapper>
      {step === Step.Email ? (
        <EmailForm />
      ) : step === Step.Password ? (
        <PasswordForm />
      ) : (
        <Home />
      )}
    </FormWrapper>
  );
}
