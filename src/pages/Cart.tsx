import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { CartAccountType } from "../redux/cart/cartSlice";
import { RootState } from "../redux/store";
import CartComponent from "../components/cartComponent/CartComponent";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { updatingFirebaseStore } from "../firebase/actions";
import { useAuth } from "../providers/AuthProvider";
import NoCartFound from "../components/NoCartFound";
import NoUserInCart from "../components/NoUserInCart";

const CartPage = () => {
  const authContext = useAuth();
  const user = authContext?.user;

  const allCartProducts: CartAccountType = useSelector(
    (state: RootState) => state.cart
  );
  const navigate = useNavigate();

  useEffect(() => {
    const initialFunction = async () => {
      if (user) await updatingFirebaseStore(user.uid, allCartProducts);
    };
    initialFunction();
  }, [allCartProducts, user]);
  if (!user) return <NoUserInCart />;
  if (allCartProducts.totalCount <= 0) return <NoCartFound />;
  return (
    <Container sx={{ paddingBlock: "68px" }} fixed>
      <Typography variant="h4" component="h3" sx={{ marginBlock: "50px" }}>
        Products to buy
      </Typography>
      {allCartProducts.products.map((product) => (
        <CartComponent key={product.id} cartProduct={product} />
      ))}
      <Button
        variant="contained"
        sx={{
          width: "100%",
          backgroundColor: "var(--main)",
          paddingBlock: "14px",
        }}
        onClick={() => navigate("/checkout")}
      >
        Proceed to checkout ({allCartProducts.totalCount} items)
        <Typography
          sx={{ fontSize: "18px", fontWeight: "bold", marginLeft: "8px" }}
        >
          {allCartProducts.totalPrice.toFixed(2)} $
        </Typography>
      </Button>
    </Container>
  );
};

export default CartPage;
