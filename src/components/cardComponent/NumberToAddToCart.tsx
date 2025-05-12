import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
const NumberToAddToCart = ({
  numberToCart,
  decreaseFunction,
  increseFunctuon,
  price,
}: {
  numberToCart: number;
  increseFunctuon: () => void;
  decreaseFunction: () => void;
  price: number;
}) => {
  const finalPrice = (price * numberToCart).toFixed(2);
  return (
    <CardActions
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "40%",
          border: "1px solid #444",
          borderRadius: "10px",
          padding: "6px",
          margin: "12px",
        }}
      >
        <RemoveIcon
          sx={{
            cursor: "pointer",
            paddingRight: "10px",
            borderRight: "1px solid #444",
            pointerEvents: `${numberToCart == 0 ? "none" : ""}`,
            opacity: `${numberToCart == 0 ? ".5" : "1"}`,
          }}
          onClick={decreaseFunction}
        />
        <Typography
          variant="subtitle1"
          component="span"
          sx={{
            flex: "1",
            textAlign: "center",
            margin: "0",
            padding: "0",
            userSelect: "none",
          }}
        >
          {numberToCart}
        </Typography>
        <AddIcon
          sx={{
            cursor: "pointer",
            paddingLeft: "10px",
            borderLeft: "1px solid #444",
          }}
          onClick={increseFunctuon}
        />
      </Box>
      {numberToCart !== 0 && (
        <Typography>
          <span className="price">{finalPrice} $</span>
        </Typography>
      )}
    </CardActions>
  );
};

export default NumberToAddToCart;
