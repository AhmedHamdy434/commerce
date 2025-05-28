import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ProductType } from "../../fetchData";
import { Link } from "react-router-dom";

const CardImage = ({ product }: { product: ProductType }) => {
  const { category, id, image, price, title } = product;

  return (
    <Link to={`/products/${id}`} style={{ color: "var(--text)" }}>
      <Box sx={{ overflow: "hidden", position: "relative" }}>
        <CardMedia component="img" image={image} alt={title} height={300} />
        <Box
          className="card-name"
          sx={{
            width: "100%",
            height: "100px",
            transform: "translateY(100%)",
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: "12px",
            transition: "300ms",
            backgroundColor: "#444",
          }}
        >
          <Typography variant="h5" component="h3">
            {title}
          </Typography>
        </Box>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2">
          price:-
          <span style={{ marginLeft: "6px" }} className="price">
            {price} $
          </span>
        </Typography>
        <Typography variant="body2">
          category :-
          <span style={{ marginLeft: "6px", color: "var(--main)" }}>
            {category}
          </span>
        </Typography>
      </CardContent>
    </Link>
  );
};

export default CardImage;
