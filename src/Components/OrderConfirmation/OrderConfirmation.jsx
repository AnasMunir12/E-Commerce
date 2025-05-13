import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OrderConfirmation() {
  const orders = useSelector((state) => state.items.order);
  const latestOrder = orders[orders.length - 1]; // Get the most recent order

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Thank You for Your Order!
      </Typography>
      
      {latestOrder && (
        <>
          <Typography variant="body1" gutterBottom>
            Your order #{latestOrder.id} has been placed successfully.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Total: ${latestOrder.total.toFixed(2)}
          </Typography>
          <Typography variant="body1" gutterBottom>
            We've sent a confirmation email to {latestOrder.shippingInfo.emailAddress}.
          </Typography>
        </>
      )}
      
      <Button 
        component={Link} 
        to="/" 
        variant="contained" 
        sx={{ 
          mt: 3,
          backgroundColor: "var(--color-danger)",
          '&:hover': {
            backgroundColor: "var(--text-color)",
            color:"var(--color-danger)"
          }
        }}
      >
        Continue Shopping
      </Button>
    </Box>
  );
}