import Greeting from "./Greeting";
import AuthForm from "./AuthForm";
import { AuthWrapper } from "./StyledElements";
import { useAuthContext } from "contexts/AuthContext";

export default function TwoStepLogin() {
  const { loading } = useAuthContext();
  return (
    <AuthWrapper>
      {loading ? (
        <p style={{ margin: "auto" }}>Loading....</p>
      ) : (
        <>
          <Greeting />
          <AuthForm />
        </>
      )}
    </AuthWrapper>
  );
}
