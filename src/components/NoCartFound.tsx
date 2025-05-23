import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const NoCartFound = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", paddingTop: "150px", textAlign: "center" }}>
      <Typography variant="h4" component="h3" sx={{ marginBottom: "50px" }}>
        No Product Found
      </Typography>

      <Button onClick={() => navigate("/products")} variant="contained">
        Go To Product Page
      </Button>
    </Box>
  );
};

export default NoCartFound;
