// src/pages/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import ProductCard from '../Components/ProductCard'
const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Search Results
      </Typography>
      
      {results.length === 0 ? (
        <Typography>No products found matching your search.</Typography>
      ) : (
        <Grid container spacing={3}>
          {results.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SearchResults;