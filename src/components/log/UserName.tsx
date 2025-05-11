import Box from "@mui/material/Box";

interface UserNameProps {
  userName: string;
  setUserName: (userName: string) => void;
}
const UserName: React.FC<UserNameProps> = ({ userName, setUserName }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <label style={{ paddingLeft: "8px" }}>UserName</label>
      <input
        type="text"
        name="userName"
        placeholder="UserName"
        style={{ width: "100%", borderRadius: "6px" }}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
    </Box>
  );
};

export default UserName;
