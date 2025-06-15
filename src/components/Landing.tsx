import landing from "../assets/landing.png";
// import Hero from "../assets/hero.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { useAuth } from "../providers/AuthProvider";
const Landing = () => {
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
    <main
      style={{
        minHeight: "calc(100vh - 68px)",
        overflow: "hidden",
        position: "relative",
        paddingTop: "68px",
      }}
    >
      {/* <img className="landing-image" src={landing} alt="landing image" /> */}
      {/* <div className="overlay"></div> */}
      <Container fixed sx={{ height: "100%", maxHeight: "1500px" }}>
        <Box
          sx={{
            display: "grid",
            height: "100%",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gridTemplateRows: { xs: "1fr 1fr 1fr", md: "2fr 1fr" },
            gridTemplateAreas: {
              xs: `"pic" "heading" "buttons"`,
              md: `"pic heading" "buttons buttons"`,
            },
            zIndex: "12",
            position: "relative",
            alignItems: "center",
          }}
        >
          <Box sx={{ gridArea: "pic" }} className="hero-image">
            <img src={landing} alt="hero-image" />
          </Box>
          <Box
            sx={{
              gridArea: "heading",
              padding: "20px",
              // width: "100%",
              // maxWidth: "700px",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ color: "var(--main)", marginBottom: "12px" }}
            >
              Style. Power. Elegance.
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                lineHeight: "2",
                letterSpacing: "1px",
                color: "var(--text1)",
              }}
            >
              Find your perfect look, tech essentials, and timeless jewelry -
              all in one place.
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "100px",
              gridArea: "buttons",
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
        </Box>
      </Container>
    </main>
  );
};

export default Landing;
