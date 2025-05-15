import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { logout } from "../firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { CartAccountType, empty } from "../redux/cart/cartSlice";
import { RootState } from "../redux/store";
import { useState, MouseEvent } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { updatingFirebaseStore } from "../firebase/actions";

function ResponsiveAppBar() {
  const authContext = useAuth();
  const user = authContext?.user;

  const pages = [
    {
      title: "Products",
      to: "/products",
    },
    {
      title: "Cart",
      to: "/cart",
    },
  ];
  const settings = [`${user?.email}`, "Logout"];
  const navigate = useNavigate();
  const allCartProducts: CartAccountType = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElCart, setAnchorElCart] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenCartMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };
  const handleNavigate = async (page: string) => {
    if (user) await updatingFirebaseStore(user.uid, allCartProducts);
    navigate(page);
  };
  const logOutFunction = async () => {
    await logout();
    dispatch(empty());
    navigate("/");
  };

  return (
    <AppBar sx={{ backgroundColor: "var(--main)" }} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SHOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ backgroundColor: "var(--main1)" }}
                >
                  <Button
                    onClick={() => handleNavigate(page.to)}
                    sx={{
                      color: "var(--text)",
                      minWidth: "150px",
                    }}
                  >
                    {page.title}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SHOP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  handleCloseNavMenu();
                  handleNavigate(page.to);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          {user ? (
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <IconButton
                  aria-label="current Cart List"
                  aria-controls="menu-cart"
                  aria-haspopup="true"
                  onClick={handleOpenCartMenu}
                >
                  <Badge
                    badgeContent={allCartProducts.totalCount}
                    overlap="circular"
                    color="success"
                  >
                    <ShoppingCartIcon
                      fontSize="large"
                      color="action"
                      sx={{ color: "var(--text)" }}
                    />
                  </Badge>
                </IconButton>
                <Menu
                  id="menu-cart"
                  anchorEl={anchorElCart}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElCart)}
                  onClose={handleCloseCartMenu}
                  // sx={{
                  //   display: { xs: "block", md: "none" },
                  // }}
                >
                  {allCartProducts.products.map((product) => (
                    <MenuItem
                      key={product.id}
                      onClick={handleCloseCartMenu}
                      sx={{ backgroundColor: "var(--main1)" }}
                    >
                      <Typography
                        component="a"
                        onClick={() => handleNavigate(`/product/${product.id}`)}
                        sx={{
                          color: "var(--text)",
                          width: "150px",
                          textOverflow: "ellipsis !important",
                        }}
                      >
                        {product.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user?.email || "user"} src="/react.svg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    sx={{
                      backgroundColor: "var(--main1)",
                      color: "var(--text)",
                    }}
                  >
                    <Typography
                      component="a"
                      onClick={() => {
                        if (setting == "Logout") logOutFunction();
                      }}
                      sx={{ minWidth: "150px", textOverflow: "ellipsis" }}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              variant="contained"
              sx={{ backgroundColor: "var(--main)" }}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
