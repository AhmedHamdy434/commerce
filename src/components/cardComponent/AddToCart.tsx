import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { adding, CartProducts } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import { ProductType } from "../../fetchData";
import Button from "@mui/material/Button";

const AddToCart = ({
  product,
  numberToCart,
}: {
  product: ProductType;
  numberToCart: number;
}) => {
  const navigate = useNavigate();
  const authContext = useAuth();
  const user = authContext?.user;

  const dispatch = useDispatch();

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (numberToCart > 0 && user) {
      const addedProduct: CartProducts = {
        id: product.id,
        category: product.category,
        title: product.title,
        image: product.image,
        price: product.price,
        count: numberToCart,
        productPrice: numberToCart * product.price,
      };
      dispatch(adding(addedProduct));
      setIsAddedToCart(true);
    }
  };

  return (
    <CardActions>
      {isAddedToCart ? (
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "red",
          }}
          onClick={() => navigate("/cart")}
        >
          Go to Cart Page
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: numberToCart == 0 ? "gray" : "var(--main)",
          }}
          onClick={handleAddToCart}
          disabled={numberToCart == 0}
        >
          Add to Cart
        </Button>
      )}
    </CardActions>
  );
};

export default AddToCart;
