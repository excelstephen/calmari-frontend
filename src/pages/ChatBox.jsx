import { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Avatar,
  CircularProgress,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../assets/calmari-mobile-icon-removebg.png";


const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi, I’m Calmari 🐚. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const theme = useTheme();

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/"); // redirects to homepage
    };


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { sender: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://calmari-backend-ec5d7ed7bf56.herokuapp.com/api/chat/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: trimmed }),
        }
      );

      const data = await res.json();
      const aiMessage = {
        sender: "ai",
        text: data?.reply?.trim() || "Sorry, I didn't quite catch that.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f0faf9",
      }}
    >
      {/* Header */}
      {/* dark-green: #103c3f */}
      {/* light-green: #00b3a6 */}
      <AppBar
        position="sticky"
        sx={{
            bgcolor: "#103c3f",
            top: 0,
            zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        >

        <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: "#ffffff", mr: 2 }}>
            <img src={logo} alt="Calmari Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
            </Avatar>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Calmari
            </Typography>
        </Box>
        <IconButton onClick={handleClose} sx={{ color: "#fff" }}>
            <CloseIcon />
        </IconButton>
        </Toolbar>

      </AppBar>

      {/* Chat Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: { xs: 2, md: 4 },
          py: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent={msg.sender === "user" ? "flex-end" : "flex-start"}
          >
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 3,
                maxWidth: "80%",
                backgroundColor:
                  msg.sender === "user" ? "#00b3a6" : "#ffffff",
                color: msg.sender === "user" ? "#ffffff" : "#333",
                boxShadow:
                  msg.sender === "user"
                    ? "0 3px 6px rgba(0,179,166,0.3)"
                    : "0 3px 6px rgba(0,0,0,0.05)",
              }}
            >
              <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                {msg.text}
              </Typography>
            </Paper>
          </Box>
        ))}
        {loading && (
          <Box display="flex" justifyContent="flex-start" px={2}>
            <CircularProgress size={20} sx={{ color: "#00b3a6" }} />
          </Box>
        )}
        <div ref={chatEndRef} />
      </Box>

      {/* Input Area */}
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        sx={{
          px: { xs: 2, md: 4 },
          py: 2,
          bgcolor: "#ffffff",
          boxShadow: "0 -2px 12px rgba(0,0,0,0.05)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={4}
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{
            backgroundColor: "#f7fafa",
            borderRadius: 2,
            mr: 2,
          }}
        />
        <IconButton
          onClick={handleSend}
          disabled={loading}
          aria-label="Send message"
          sx={{
            bgcolor: "#00b3a6",
            color: "#fff",
            ":hover": {
              bgcolor: "#009e92",
            },
          }}
        >
          {loading ? (
            <CircularProgress size={20} sx={{ color: "#ffffff" }} />
          ) : (
            <SendIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBox;
