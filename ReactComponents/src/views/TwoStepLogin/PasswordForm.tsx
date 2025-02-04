import { useAuthContext } from "contexts/AuthContext";
import { MyButton } from "./StyledElements";

export default function PasswordForm() {
  const { moveToHome, password, updatePassword, moveToEmail } =
    useAuthContext();
  return (
    <>
      <input
        type="password"
        value={password}
        onChange={updatePassword}
        style={{
          width: "300px",
          padding: "10px",
          outline: "none",
          border: "none",
        }}
        placeholder="Enter your Password"
      />
      <div>
        <MyButton onClick={moveToHome}>Next</MyButton>
        <MyButton style={{ left: "10px" }} onClick={moveToEmail}>
          back
        </MyButton>
      </div>
    </>
  );
}
