import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ProductType } from "../../fetchData";

const CardImage = ({ product }: { product: ProductType }) => {
  const { category, image, price, title } = product;

  return (
    <Box sx={{ cursor: "pointer" }}>
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
        <Typography variant="subtitle2">
          price:- <span className="price"> {price} $</span>
        </Typography>
        <Typography variant="subtitle2" component="h4" sx={{}}>
          category :- {category}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default CardImage;
