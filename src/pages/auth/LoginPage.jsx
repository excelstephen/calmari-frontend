// src/pages/Login.jsx
import {
  Container, Box, TextField, Typography,
  Button, Avatar, CircularProgress
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import logo from "../../assets/calmari-mobile-icon-removebg.png";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // make sure this file exports configured Firebase auth
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';


export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: '#2D6A4F' }}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Avatar sx={{ bgcolor: "#ffffff", mr: 2 }}>
          <img src={logo} alt="Calmari Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: '#2D6A4F', mb: 1 }}>
          Calmari Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            onChange={handleChange}
          />

          {error && (
            <Typography color="error" variant="body2" mt={1}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: '#2D6A4F',
              '&:hover': { backgroundColor: '#40916C' },
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
          </Button>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <Link component={RouterLink} to="/register" sx={{ color: '#2D6A4F' }}>
            Register
          </Link>
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link component={RouterLink} to="/" sx={{ color: '#2D6A4F' }}>
            Back to Homepage
          </Link>
        </Typography>

      </Box>
    </Container>
  );
}
