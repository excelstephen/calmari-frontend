import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoodIcon from "@mui/icons-material/Mood";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box sx={{ bgcolor: "#f0faf9", color: "#103c3f", fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <Box sx={{ py: 10, textAlign: "center", bgcolor: "#d6f5f0" }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
            Find Your <span style={{ color: "#00b3a6" }}>Calm</span>
          </Typography>
          <Typography variant="h6" gutterBottom>Your Peace Matters</Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 3, bgcolor: "#00b3a6", ":hover": { bgcolor: "#009e92" } }}
            component={Link}
            to="/register"
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <FeatureCard icon={<ChatIcon />} title="AI Therapy Chatbot" desc="Receive support via our intelligent chatbot" />
          <FeatureCard icon={<MoodIcon />} title="Daily Mood Tracker" desc="Log your emotions and track your progress" />
          <FeatureCard icon={<HistoryIcon />} title="Session History" desc="Reflect on past conversations and growth" />
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box sx={{ py: 8, bgcolor: "#ffffff", textAlign: "center" }}>
        <Container>
          <Typography variant="h4" gutterBottom>Testimonials</Typography>
          <Typography variant="subtitle1" fontStyle="italic" mb={3}>
            "Calmari has been a game-changer for my mental well-being."
          </Typography>
          <Typography variant="body1">— Angela F.</Typography>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: "#103c3f", color: "#fff", textAlign: "center" }}>
        <Container>
          <Typography variant="h4" gutterBottom>Get Started</Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 2, bgcolor: "#fff", color: "#103c3f", ":hover": { bgcolor: "#e0f7f4" } }}
            component={Link}
            to="/register"
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ borderRadius: 4, backgroundColor: "#d6f5f0", textAlign: "center" }}>
      <CardContent>
        <Box sx={{ fontSize: 50, mb: 1 }}>{icon}</Box>
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
        <Typography variant="body2" mt={1}>{desc}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default HomePage;
