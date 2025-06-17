import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--main)",
        textAlign: "center",
        paddingBlock: "40px",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Shop. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
