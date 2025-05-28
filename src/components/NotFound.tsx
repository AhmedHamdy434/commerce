import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ paddingTop: "300px", textAlign: "center" }}>
      <Typography variant="h4" component="h3" sx={{ marginBottom: "50px" }}>
        Loading...
      </Typography>
      <h2 className="text-[32px] font-bold">404</h2>
      <p className="text-[24px]">Page not Found</p>
      <Button onClick={() => navigate("/")} className="btn">
        Home
      </Button>
    </Box>
  );
};

export default NotFound;
