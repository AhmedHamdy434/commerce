import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NoUserInCart = () => {
  return (
    <Box sx={{ minHeight: "100vh", paddingTop: "150px", textAlign: "center" }}>
      <Typography variant="h4" component="h3" sx={{ marginBottom: "50px" }}>
        You should sign in
      </Typography>

      <Button href="/signin" variant="contained">
        Go To Sign In Page
      </Button>
    </Box>
  );
};

export default NoUserInCart;
