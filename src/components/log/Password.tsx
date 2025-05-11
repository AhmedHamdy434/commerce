import Box from "@mui/material/Box";

interface PasswordProps {
  password: string;
  setPassword: (password: string) => void;
}
const PasswordInput: React.FC<PasswordProps> = ({ password, setPassword }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <label style={{ paddingLeft: "8px" }}>Password</label>
      <input
        type="password"
        placeholder="Password"
        style={{ width: "100%", borderRadius: "6px" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </Box>
  );
};

export default PasswordInput;
