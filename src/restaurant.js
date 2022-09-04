const createMenu = (objetoRetornado) => {
  const restaurant = {
    fetchMenu: () => objetoRetornado,
    consumption: [],
    order: (request) => restaurant.consumption.push(request),
    pay: () => { 
      let payment = 0;
      restaurant.consumption.forEach((item) => {
        if (restaurant.food[item] || restaurant.drink[item]) { // If  e Object.assign baseados no PR do Raphael Martins
          payment += restaurant.food[item] || restaurant.drink[item];
        }
      });
      parseFloat((payment += payment * 0.1).toFixed(2));
      return payment;
    },
  };
  Object.assign(restaurant, objetoRetornado);
  return restaurant;
};

module.exports = createMenu;