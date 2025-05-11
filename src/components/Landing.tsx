import landing from "../assets/landing.jpg";
import Hero from "../assets/hero.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <main
      style={{
        height: "calc(100vh - 70px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        className="landing-image"
        src={landing}
        alt="landing image"
        loading="lazy"
      />
      <div className="overlay"></div>
      <Container fixed sx={{ height: "100%" }}>
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
            <img src={Hero} alt="hero-image" loading="lazy" />
          </Box>
          <Box
            sx={{
              gridArea: "heading",
              padding: "20px",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ color: "var(--main)", marginBottom: "12px" }}
            >
              Style It Your Way
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ lineHeight: "2", letterSpacing: "2px" }}
            >
              Discover the latest fashion trends right here! From casual to
              classy, we've got outfits for every mood.Pick your favourites and
              get them delivered straight to your door. Stay unique, stay
              stylish!
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
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--main)",
              }}
            >
              Sign in
            </Button>
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
