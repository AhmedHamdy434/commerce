import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { signIn } from "../firebase/auth";
import Email from "../components/log/Email";
import PasswordInput from "../components/log/Password";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SignIn() {
  const authContext = useAuth();
  const user = authContext?.user;
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { pending } = useFormStatus();

  const handleSign = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signIn(email, password);
    if (response.success) navigate("/");
    else setError(response.message || "Sign in failed.");
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
          Sign In
        </Typography>
        <form onSubmit={handleSign}>
          <Email email={email} setEmail={setEmail} />
          <PasswordInput password={password} setPassword={setPassword} />
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
            {pending ? "Signing ..." : "Sign In"}
          </Button>
        </form>

        <Button href="/signup" variant="text" sx={{ marginBlock: "16px" }}>
          Create a new account
        </Button>
      </Box>
    </Container>
  );
}
