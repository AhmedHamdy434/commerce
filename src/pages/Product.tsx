import { useParams } from "react-router-dom";
import { fetchData, mainUrl, ProductType } from "../fetchData";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Typography from "@mui/material/Typography";
import CategorySpan from "../components/CategorySpan";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchingFunction = async () => {
      const productObject: ProductType = await fetchData(`${mainUrl}/${id}`);
      setProduct(productObject);
      setIsLoading(false);
    };
    fetchingFunction();
  }, [id]);
  if (isLoading) return <Loading />;
  if (!product) return;
  const { image, title, price, category, description, rating } = product;

  return (
    <Container fixed>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { md: "space between" },
          gap: { xs: "16px", md: "50px" },
          paddingTop: { xs: "100px", md: "160px" },
        }}
      >
        <Box sx={{ width: "80%", maxWidth: "500px" }}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            style={{ borderRadius: "12px", width: "100%" }}
          />
        </Box>
        <Box sx={{ marginBlock: "16px", flex: { md: "1" } }}>
          <Typography variant="h5">{title}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: "16px",
              marginBlock: "32px",
            }}
          >
            <CategorySpan
              extraClassName="var(--main)"
              name="Category"
              value={category}
            />
            <CategorySpan
              extraClassName="orange"
              name="Rating"
              value={rating.rate.toString()}
            />
            <CategorySpan
              extraClassName="var(--main)"
              name="Price"
              value={`${price.toString()} $`}
            />
          </Box>
        </Box>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          marginTop: { md: "40px" },
          marginBottom: "40px",
          lineHeight: "2",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Description :</Typography>{" "}
        {description}
      </Typography>
    </Container>
  );
};

export default ProductPage;
