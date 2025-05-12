import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Loading = () => {
  return (
    <Box sx={{ paddingTop: "300px", textAlign: "center" }}>
      <Typography variant="h4" component="h3" sx={{ marginBottom: "50px" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
