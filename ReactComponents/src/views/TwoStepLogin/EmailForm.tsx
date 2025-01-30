import { useAuthContext } from "contexts/AuthContext";
import { MyButton } from "./StyledElements";

export default function EmailForm() {
  const { moveToPasswordForm, email, updateEmail, error } = useAuthContext();
  return (
    <>
      <input
        value={email}
        onChange={updateEmail}
        style={{
          width: "300px",
          padding: "10px",
          outline: "none",
          borderColor: error ? "red" : "none",
        }}
        placeholder="Enter your Email"
      />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      <MyButton onClick={moveToPasswordForm}>Next</MyButton>
    </>
  );
}
