// src/components/ProductCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.img}
        alt={product.name}
        sx={{ objectFit: 'contain', p: 1 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        {product.discount && (
          <Typography variant="body2" color="error">
            {product.discount}
          </Typography>
        )}
      </CardContent>
      <Button 
        component={Link} 
        to={`/product/${product.id}`} 
        size="small" 
        color="primary"
      >
        View Details
      </Button>
    </Card>
  );
};

export default ProductCard;