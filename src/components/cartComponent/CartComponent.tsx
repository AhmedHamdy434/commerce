import Card from "@mui/material/Card";
import { addingOne, CartProducts, removeOne } from "../../redux/cart/cartSlice";
import NumberToAddToCart from "../cardComponent/NumberToAddToCart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import CardMedia from "@mui/material/CardMedia";

const CartComponent = ({ cartProduct }: { cartProduct: CartProducts }) => {
  const { title, image, category, price, count } = cartProduct;
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        backgroundColor: "#555",
        borderRadius: "10px",
        color: "white",
        padding: "14px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "40px",
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "40%" },
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          loading="lazy"
          height={300}
          sx={{ borderRadius: "10px" }}
        />
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          // backgroundColor: "#555",
        }}
      >
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="h6">
          {category}
        </Typography>
        <Typography variant="subtitle1" component="span">
          price : {price} $
        </Typography>
        <NumberToAddToCart
          numberToCart={count}
          decreaseFunction={() => dispatch(removeOne(cartProduct))}
          increseFunctuon={() => dispatch(addingOne(cartProduct))}
          price={price}
        />
      </Box>
    </Card>
  );
};

export default CartComponent;
