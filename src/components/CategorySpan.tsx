import Box from "@mui/material/Box";

const CategorySpan = ({
  value,
  extraClassName,
  name,
}: {
  value: string;
  extraClassName: string;
  name: string;
}) => {
  return (
    <Box
      sx={{
        paddingInline: "16px",
        paddingBlock: "8px",
        fontSize: "11px",
        borderRadius: "12px",
        display: "flex",
        gap: "8px",
        alignItems: "center",
        backgroundColor: extraClassName,
      }}
    >
      <span>{name} :</span>
      <span>{value}</span>
    </Box>
  );
};

export default CategorySpan;
