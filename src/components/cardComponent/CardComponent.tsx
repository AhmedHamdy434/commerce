import { ProductType } from "../../fetchData";
import Card from "@mui/material/Card";

import { useState } from "react";
import NumberToAddToCart from "./NumberToAddToCart";
import AddToCart from "./AddToCart";
import CardImage from "./CardImage";

const CardComponent = ({ product }: { product: ProductType }) => {
  const [numberToCart, setNumberToCart] = useState<number>(0);

  return (
    <Card
      className="card-image"
      sx={{
        backgroundColor: "#555",
        borderRadius: "10px",
        color: "white",
        paddingBottom: "14px",
      }}
    >
      <CardImage product={product} />

      <NumberToAddToCart
        numberToCart={numberToCart}
        decreaseFunction={() => setNumberToCart(numberToCart - 1)}
        increseFunctuon={() => setNumberToCart(numberToCart + 1)}
        price={product.price}
      />
      <AddToCart product={product} numberToCart={numberToCart} />
    </Card>
  );
};

export default CardComponent;
