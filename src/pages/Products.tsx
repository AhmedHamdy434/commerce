import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchData, mainUrl, ProductType } from "../fetchData";
import CardComponent from "../components/cardComponent/CardComponent";

const Products = () => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchFunction = async () => {
      const products: ProductType[] = await fetchData(mainUrl);
      setAllProducts(products);
      setIsLoading(false);
    };
    fetchFunction();
  }, []);
  if (isLoading)
    return (
      <Box
        sx={{ minHeight: "100vh", paddingTop: "300px", textAlign: "center" }}
      >
        <Typography variant="h3" component="h3" sx={{ marginBottom: "50px" }}>
          Loading...
        </Typography>
      </Box>
    );
  return (
    <>
      <Container fixed sx={{ minHeight: "100vh" }}>
        <h2>Explore all products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id ex
          possimus consequuntur velit sin
        </p>
        <Box
          className="cards"
          sx={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fill , minmax(300px , 1fr))",
          }}
        >
          {allProducts.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Products;
