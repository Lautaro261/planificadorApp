export const formatearCantidad = quantity => {
  return Number(quantity).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const idGenerator = () => {
  const random = Math.random().toString(36).substring(2, 11);
  const fecha = Date.now().toString(36);

  return random + fecha;
};
