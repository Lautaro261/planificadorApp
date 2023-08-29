export const formatearCantidad = quantity => {
  return Number(quantity).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
