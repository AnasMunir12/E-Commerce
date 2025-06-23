// src/components/AllProducts.js
import React, { useState } from "react";
import { 
  Box, 
  Grid, 
  Typography, 
  Rating, 
  Button, 
  IconButton,
  Snackbar,
  Alert,
  Slide 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { allProductss } from './productData';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addToProduct } from "../Utils/itemSlice";
import { useDispatch } from "react-redux";

const AllProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Snackbar state
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <Box sx={{ p: 4 }}>
      {/* Snackbar Notification */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={(props) => <Slide {...props} direction="left" />}
        sx={{
          '& .MuiSnackbarContent-root': {
            minWidth: 'unset',
            flexGrow: 0,
          }
        }}
      >
        <Alert
          severity="info"
          onClose={() => setOpen(false)}
          sx={{ 
            backgroundColor: "var(--color-danger)",
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
          iconMapping={{
            info: <ShoppingCartOutlinedIcon fontSize="inherit" />
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {message}
          </Typography>
        </Alert>
      </Snackbar>

      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        All Products
      </Typography>
      
      <Grid container spacing={4}>
        {allProductss.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Box 
              sx={{ 
                p: 2, 
                border: "1px solid #eee", 
                borderRadius: 2,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  cursor:"pointer"
                }
              }}
            >
              <Box
                sx={{
                  height: 200,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2
                }}
              >
                <img 
                  src={product.img} 
                  alt={product.name} 
                  style={{ 
                    maxWidth: "100%", 
                    maxHeight: "100%",
                    objectFit: "contain"
                  }} 
                />
              </Box>
              
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {product.name}
              </Typography>
              
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Rating value={4} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 1 }}>(120)</Typography>
              </Box>
              
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h6" color="error">
                  ${product.price}
                </Typography>
                {product.discount && (
                  <Typography 
                    sx={{ 
                      textDecoration: "line-through", 
                      color: "text.secondary" 
                    }}
                  >
                    ${Math.round(
                      product.price / (1 - parseInt(product.discount) / 100)
                    )}
                  </Typography>
                )}
              </Box>
              
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ background:"black"}}
                  size="small"
                  startIcon={<ShoppingCartOutlinedIcon />}
                  fullWidth
                  onClick={() => {
                    const userInfo = localStorage.getItem("UserInfo");
                    if (!userInfo) {
                      setMessage("Please login to add items to your cart");
                      setOpen(true);
                      setTimeout(() => navigate("/login"), 1500);
                      return;
                    }
                    
                    dispatch(
                      addToProduct({
                        id: product.id,
                        name: product.name,
                        image: product.img,
                        price: product.price
                      })
                    );
                    setMessage(`${product.name} added to cart!`);
                    setOpen(true);
                  }}
                >
                  Add to Cart
                </Button>
                <IconButton
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    "&:hover": {
                      color: "error.main",
                      borderColor: "error.main",
                    },
                  }}
                >
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllProducts;