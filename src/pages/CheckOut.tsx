import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Divider,
} from "@mui/material";
import { useAuth } from "../providers/AuthProvider";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { CartAccountType, empty, initialState } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { updatingFirebaseStore } from "../firebase/actions";
interface FormData {
  name: string;
  mobile: string;
  address: string;
}

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    address: "",
  });
  const authContext = useAuth();
  const user = authContext?.user;
  const allCartProducts: CartAccountType = useSelector(
    (state: RootState) => state.cart
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [transportFee] = useState<number>(30);
  const [productPrice, setProductPrice] = useState<number>(
    allCartProducts.totalPrice
  );
  useEffect(() => {
    setProductPrice(allCartProducts.totalPrice);
  }, [allCartProducts.totalPrice]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (user) {
      dispatch(empty());
      await updatingFirebaseStore(user.uid, initialState);
    }
    navigate("/");
  };
  if (!user || productPrice === 0) return null;
  return (
    <Paper
      elevation={4}
      sx={{
        padding: 4,
        maxWidth: 500,
        margin: "0 auto",
        marginTop: "100px ",

        backgroundColor: "var(--background1)",
        color: "var(--text)",
      }}
    >
      <Typography variant="h5" gutterBottom textAlign="center">
        Checkout
      </Typography>
      <Box
        component="form"
        className="checkout-form"
        onSubmit={handleSubmit}
        sx={{ mt: 2 }}
      >
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
          color="success"
        />

        <TextField
          fullWidth
          label="Mobile Number"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          margin="normal"
          required
          color="success"
        />

        <TextField
          fullWidth
          label="Delivery Address"
          name="address"
          multiline
          minRows={3}
          value={formData.address}
          onChange={handleChange}
          margin="normal"
          required
          color="success"
        />

        <Divider sx={{ my: 2, color: "var(--main)" }} />

        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          variant="body1"
        >
          <span>Product Price:</span>
          <span className="price">{productPrice.toFixed(2)} $</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          variant="body1"
        >
          <span>Transportation Fee :</span>
          <span className="price">{transportFee.toFixed(2)} $</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Total:</span>
          <span className="price">
            {(productPrice + transportFee).toFixed(2)} $
          </span>
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, backgroundColor: "var(--main)" }}
        >
          Pay Now
        </Button>
      </Box>
    </Paper>
  );
};

const CheckoutPage: React.FC = () => {
  return (
    <Container fixed sx={{ mt: 8 }}>
      <CheckoutForm />
    </Container>
  );
};

export default CheckoutPage;
