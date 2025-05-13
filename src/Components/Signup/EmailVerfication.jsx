import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../Utils/itemSlice';
import { Box, Typography, CircularProgress } from '@mui/material';

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function EmailVerification() {
      const [snackmessage, setSnackMessage] = useState("");
      const [snackSeverity, setSnackSeverity] = useState("Success");
      const [emailerror, setEmailerror] = useState("");
      
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status , setStatus] = useState('verifying');
  const [error, setError] = useState(null);
  const { unverifiedUsers } = useSelector((state) => state.items);


  useEffect(() => {
    const verify = async () => {
        try {
            // check it token exist

const userExists = unverifiedUsers.some(
    user => user.verificationToken  === token
);
if (!userExists) {
    setStatus('error');
    setError('Invalid or expired verification link');
    return;
}  
dispatch(verifyEmail({ token}));
setStatus('success');
setTimeout(() => navigate('/login'), 3000);
 } catch (err) {
    setStatus('error');
    setError('Verification failed. Please try again.');
 }
    };
    verify();
  }, [token, dispatch, navigate, unverifiedUsers]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="60vh">
    {status === 'verifying' && (
      <>
        <Typography variant="h5" gutterBottom>Verifying your email...</Typography>
        <CircularProgress />
      </>
    )}
    
    {status === 'success' && (
      <>
        <Typography variant="h5" gutterBottom>Email Verified Successfully!</Typography>
        <Typography>You'll be redirected to login shortly</Typography>
      </>
    )}
    
    {status === 'error' && (
      <>
        <Typography variant="h5" color="error" gutterBottom>{error}</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/signup')}
          sx={{ mt: 2 }}
        >
          Go to Signup
        </Button>
      </>
    )}
  </Box>
  );
}