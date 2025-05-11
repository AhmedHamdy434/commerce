import Box from "@mui/material/Box";

interface EmailProps {
  email: string;
  setEmail: (email: string) => void;
}
const Email: React.FC<EmailProps> = ({ email, setEmail }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <label style={{ paddingLeft: "8px" }}>Email</label>
      <input
        type="email"
        placeholder="Email"
        style={{ width: "100%", borderRadius: "6px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </Box>
  );
};

export default Email;
