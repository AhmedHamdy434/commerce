import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/auth";
import Button from "@mui/material/Button";

interface GoogleButtonProps {
  setError: (message: string) => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ setError }) => {
  const navigate = useNavigate();

  const handleGoogle = async () => {
    const response = await signInWithGoogle();
    if (response.success) navigate("/");
    else setError(response.message || "Google Sign-in failed");
  };
  return (
    <Button
      variant="contained"
      onClick={handleGoogle}
      sx={{
        marginTop: "16px",
        width: "100%",
        backgroundColor: "red",
        padding: "8px",
        borderRadius: "6px",
      }}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
