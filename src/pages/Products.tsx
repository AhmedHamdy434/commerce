import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { fetchData, mainUrl, ProductType } from "../fetchData";
import CardComponent from "../components/cardComponent/CardComponent";
import Loading from "../components/Loading";
import Typography from "@mui/material/Typography";

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

  return (
    <Container fixed sx={{ minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ marginTop: "50px" }}>
        Discover the perfect products for every style and need.
      </Typography>
      <p
        style={{
          color: "var(--text1)",
          letterSpacing: "1px",
          lineHeight: "2",
        }}
      >
        Explore our wide selection of men's and women's clothing, high-quality
        electronics, and stunning jewelry.
        <br />
        Whether you're looking for the latest fashion trends, powerful gadgets,
        or elegant accessories, we have something for everyone. Shop with
        confidence and elevate your lifestyle today.
      </p>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </Container>
  );
};

export default Products;
