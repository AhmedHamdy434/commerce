import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LandingImage from "../assets/landing.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const authContext = useAuth();
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const user = authContext?.user;
    setCurrentUser(user);
    setIsMounted(true);
  }, [authContext?.user]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${LandingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          py: 10,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "calc(100vh - 70px)",
            gap: "4vh",
          }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Style. Power. Elegance.
          </Typography>
          <Typography variant="h6" mb={4}>
            Find your perfect look, tech essentials, and timeless jewelry - all
            in one place.
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "100px",
            }}
          >
            {isMounted && !currentUser && (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--main)",
                }}
                onClick={() => navigate("/signin")}
              >
                Sign in
              </Button>
            )}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--main)",
              }}
              onClick={() => navigate("/products")}
            >
              See Products
            </Button>
          </Box>
        </Container>
      </Box>
      <Box sx={{ paddingBlock: "50px" }}>
        <Container>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Why Choose ShopEase?
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" fontWeight="bold">
                Fast Delivery
              </Typography>
              <Typography>
                Get your products in 24-48 hours with our express shipping.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" fontWeight="bold">
                Best Quality
              </Typography>
              <Typography>
                All items are carefully selected for top-notch quality.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" fontWeight="bold">
                Customer Support
              </Typography>
              <Typography>
                24/7 friendly support to help you anytime.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      ;
    </>
  );
};

export default Home;
