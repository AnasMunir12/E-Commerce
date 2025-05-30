import {
  Alert,
  Box,
  Button,
  IconButton,
  Input,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React ,{useRef, useState} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Slide from "@mui/material/Slide";


import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

export default function Contactmain() {
  const [ open , setOpen ] = useState(false);
  const [ message , setMessage ] =useState(" ");
  const [ iseSuccess , setIsSuccess] = useState(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const phone = form.current.phone.value.trim();
    const textMessage = form.current.message.value.trim();

    if( !name || !email || !phone || !textMessage ) {
      setMessage("Please fill in all the fields");
      setIsSuccess(false);
      setOpen(true);
      return;
    }

    emailjs.sendForm(
      "service_wtanvqu",
      "template_x27o0yj",
      form.current,
      "sK1QosKDSTZ0DZiip",
    ).then(
      (result) => {
        setMessage('Message sent Successfully!');
        setIsSuccess(true);
        setOpen(true);
        form.current.reset();
      },
      (error) => {
        setMessage("Failed to send message. Please try again. ");
      setIsSuccess(false);
        setOpen(true);
      }
    );
  };
  return (
    <>
     <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      TransitionComponent={(props) => <Slide {...props} direction="right" />}
      sx={{
        '& .MuiSnackbarContent-root': {
          minWidth: 'unset',
          flexGrow: 0,
        }
      }}
    >
      <Alert
        severity={ iseSuccess ? "success" : "error"}
        onClose={() => setOpen(false)}
        sx={{ 
          backgroundColor:  iseSuccess ? "var(--color-success)" : "var(--color-danger)",
          color: "white",
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px',
          alignItems: 'center',
          '& .MuiAlert-icon': {
            color: 'white',
            fontSize: '1.5rem',
            marginRight: '8px'
          },
          '& .MuiAlert-message': {
            padding: '4px 0',
            fontSize: '0.9rem'
          },
          '& .MuiAlert-action': {
            paddingLeft: '16px',
            alignItems: 'center'
          }
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {message}
        </Typography>
      </Alert>
    </Snackbar>


      {/* Links  */}
      <Box display="flex" alignItems="center" gap={1.5} mt={8} px={{ xs:2, md:6 }}>
        <Typography
          component={Link}
          to="/"
          sx={{
            fontSize: "var(--font-sm)",
            opacity: 0.5,
            textDecoration: "none",
            color: "black",
        
          }}
        >
          Home
        </Typography>
        <Typography>/</Typography>
        <Typography
          component={Link}
          to="/about"
          sx={{
            fontSize: "var(--font-sm)",
            textDecoration: "none",
            color: "black",
          }}
        >
          Contact
        </Typography>
      </Box>

      {/* Main Box */}
      <Box display={"flex"} flexDirection={{ xs:"column" , md:"row"}} justifyContent={"center"} gap={10} mt={10} px={{ xs:2 , sm:2 , md:2}}>
        {/* Left Side of contact to us */}
        <Box  >
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <IconButton sx={{ background:"var(--color-danger)", color:"white"}}>
              <LocalPhoneOutlinedIcon />
            </IconButton>
            <Typography sx={{fontFamily:"var( --font-family-primary)", fontSize:"var(--font-sm)"}}>Call To Us</Typography>
          </Box>
          <Typography sx={{ fontFamily:"var( --font-family-primary)", fontSize:"var(--font-sm)" , mt:2}}>We are available 24/7,7 days a week.</Typography>
          <Typography  sx={{ fontFamily:"var( --font-family-primary)", fontSize:"var(--font-sm)" , mt:2}}>Phone: +92 309 4105183</Typography>
          <Box sx={{ border: "1px solid #000000 ", width: "270px", mt:3 }}></Box>
          <Box display={"flex"} alignItems={"center"} gap={2} mt={3}>
            <IconButton sx={{ background:"var(--color-danger)", color:"white"}}>
              <MailOutlineOutlinedIcon />
            </IconButton>
            <Typography sx={{fontFamily:"var( --font-family-primary)", fontSize:"var(--font-sm)"}}>Write to US</Typography>
          </Box>
          <Typography sx={{fontFamily:"var( --font-family-primary)", fontSize:"var(--font-sm)", mt:2}}>
            Fill out our form and we will contact <br /> you within 24 hours.
          </Typography>
          <Typography sx={{fontFamily:"var( --font-family-primary)", fontSize:"var(--font-sm)", mt:2}}> <strong> Email: </strong> anassheik890@gmail.com</Typography>
          <Typography sx={{fontFamily:"var( --font-family-primary)", fontSize:"var(--font-sm)", mt:2}}> <strong> Email: </strong> support@exclusive.com</Typography>
        </Box>

        {/* Right Side of Contact */}
    <form ref={form} onSubmit={sendEmail}>
        <Box>
          <Box direction={"row"}  display={"flex"}  flexDirection={{ xs:"column" , md:"row"}}  gap={ 2}>
            <TextField name="name" placeholder="Your Name"  size="small"  fullWidth sx={{ background:"var(--success-bg)"}} ></TextField>
            <TextField name="email" placeholder="Your Email" size="small" fullWidth sx={{ background:"var(--success-bg)",}}></TextField>
            <TextField name="phone" placeholder="Your Phone" size="small" fullWidth sx={{ background:"var(--success-bg)" ,}}></TextField>
          </Box>
          <TextField
          name="message"
            placeholder="Your Message"
            fullWidth
            sx={{ mt: 2 , background:"var(--success-bg)"}}
            multiline
            minRows={7}
            
          ></TextField>
          <Stack direction={"row"} justifyContent={ { xs:"center" , md: "flex-end"  }} mt={4}>
          <StyledWrapper>
      <div>
        <button className="btn"><i className="animation" />Send Message<i className="animation" />
        </button>
      </div>
    </StyledWrapper>
          </Stack>
        </Box>
      </form>

      </Box>

      <Box mt={20}></Box>
    </>
  );
}




const StyledWrapper = styled.div`
  .btn {
    outline: 0;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-danger);
    min-width: 200px;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
    box-sizing: border-box;
    padding: 16px 20px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    overflow: hidden;
    cursor: pointer;
  }

  .btn:hover {
    opacity: .95;
  }

  .btn .animation {
    border-radius: 100%;
    animation: ripple 0.6s linear infinite;
  }

  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);
    }

    100% {
      box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
    }
  }`;

