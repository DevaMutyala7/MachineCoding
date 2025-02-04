import { useAuthContext } from "contexts/AuthContext";
import { GreetingWrapper } from "./StyledElements";
import { Step } from "./types";

export default function Greeting() {
  const { step, email } = useAuthContext();
  return (
    <GreetingWrapper>
      {step === Step.Email ? (
        <>
          <h2>Sign In</h2>
          <p>Use your email address</p>
        </>
      ) : (
        <>
          <h2>Welcome!</h2>
          <p>{email}</p>
        </>
      )}
    </GreetingWrapper>
  );
}
