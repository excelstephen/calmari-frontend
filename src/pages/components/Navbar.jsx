import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SpaIcon from "@mui/icons-material/Spa";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import logo from "../../assets/calmari-mobile-icon-removebg.png";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Features", path: "#features" },
    { label: "Testimonials", path: "#testimonials" },
  ];

  return (
    <>
    {/* dark-green: #103c3f */}
      {/* light-green: #00b3a6 */}
      <AppBar position="static" sx={{ bgcolor: "#103c3f", boxShadow: "none" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              
              <img src={logo} alt="Calmari Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
              <Typography variant="h6" fontWeight="bold">
                Calmari
              </Typography>
            </Box>

            {/* Desktop Menu */}
            {!isMobile ? (
              <Box sx={{ display: "flex", gap: 2 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    color="inherit"
                    component={link.path.startsWith("#") ? "a" : RouterLink}
                    to={link.path.startsWith("#") ? undefined : link.path}
                    href={link.path.startsWith("#") ? link.path : undefined}
                    sx={{ color: "#fff" }}
                  >
                    {link.label}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: "#fff",
                    borderColor: "#00b3a6",
                    ":hover": { borderColor: "#00b3a6", backgroundColor: "#00b3a620" },
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/register"
                  sx={{
                    bgcolor: "#00b3a6",
                    color: "#fff",
                    ":hover": { bgcolor: "#009e92" },
                  }}
                >
                  Register
                </Button>
              </Box>
            ) : (
              // Hamburger Menu
              <IconButton sx={{ color: "#fff" }} onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            width: 250,
            height: "100%",
            backgroundColor: "#103c3f",
            padding: "16px",
          }}
        >
          <List>
            {[ 
              { label: "Home", path: "/", icon: <HomeIcon sx={{ color: "#00b3a6" }} /> },
              { label: "Features", path: "#features", icon: <StarIcon sx={{ color: "#00b3a6" }} /> },
              { label: "Testimonials", path: "#testimonials", icon: <CommentIcon sx={{ color: "#00b3a6" }} /> },
            ].map((item) => (
              <ListItem
                button
                key={item.label}
                component={item.path.startsWith("#") ? "a" : RouterLink}
                to={item.path.startsWith("#") ? undefined : item.path}
                href={item.path.startsWith("#") ? item.path : undefined}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#00b3a630",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {item.icon}
                  <ListItemText primary={item.label} sx={{ color: "#fff" }} />
                </Box>
              </ListItem>
            ))}

            <ListItem
              button
              component={RouterLink}
              to="/login"
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "#00b3a630",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LoginIcon sx={{ color: "#00b3a6" }} />
                <ListItemText primary="Login" sx={{ color: "#fff" }} />
              </Box>
            </ListItem>

            <ListItem
              button
              component={RouterLink}
              to="/register"
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "#00b3a630",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PersonAddIcon sx={{ color: "#00b3a6" }} />
                <ListItemText primary="Register" sx={{ color: "#fff" }} />
              </Box>
            </ListItem>
          </List>
        </motion.div>
      </Drawer>

    </>
  );
};

export default Navbar;
