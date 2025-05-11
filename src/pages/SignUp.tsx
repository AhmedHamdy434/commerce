import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { signUp } from "../firebase/auth";
import Email from "../components/log/Email";
import PasswordInput from "../components/log/Password";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserName from "../components/log/UserName";
import GoogleButton from "../components/log/GoogleButton";

export default function SignUp() {
  const authContext = useAuth();
  const user = authContext?.user;
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [userName, setUserName] = useState("");
  const { pending } = useFormStatus();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signUp(email, password, userName);
    if (response.success) navigate("/");
    else setError(response.message || "Sign failed.");
  };

  useEffect(() => {
    if (user) navigate("/");
  });
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#222",
          padding: "32px",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          Sign Up
        </Typography>
        <form onSubmit={handleSignUp}>
          <Email email={email} setEmail={setEmail} />
          <PasswordInput password={password} setPassword={setPassword} />
          <UserName userName={userName} setUserName={setUserName} />
          {error ? (
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "red", maxHeight: "20px", marginTop: "4px" }}
            >
              {error}
            </Typography>
          ) : (
            <Typography sx={{ height: "26px" }}></Typography>
          )}
          <Button
            type="submit"
            sx={{
              width: "100%",
              backgroundColor: `${pending ? "gray" : "var(--main)"}`,
            }}
            variant="contained"
            disabled={pending}
          >
            {pending ? "Signing ..." : "Sign Up"}
          </Button>
        </form>
        <GoogleButton setError={setError} />
        <Button href="/signin" variant="text" sx={{ marginBlock: "16px" }}>
          Already have an account
        </Button>
      </Box>
    </Container>
  );
}
