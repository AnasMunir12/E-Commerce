import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, Rating, Button, IconButton } from "@mui/material";
import { allProductss } from '../Home/productData';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToProduct } from "../Utils/itemSlice";

const CategoryProducts = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

  // Filter products by category (case insensitive)
  const categoryProducts = allProductss.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </Typography>
      
      {categoryProducts.length === 0 ? (
        <Typography>No products found in this category.</Typography>
      ) : (
        <Grid container spacing={4}>
          {categoryProducts.map((product) => (
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
                      dispatch(
                        addToProduct({
                          id: product.id,
                          name: product.name,
                          image: product.img,
                          price: product.price
                        })
                      )
                      navigate('/cart')
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
      )}
    </Box>
  );
};

export default CategoryProducts;