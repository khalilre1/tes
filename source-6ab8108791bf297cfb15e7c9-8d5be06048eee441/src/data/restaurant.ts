export const restaurant = {
  name: "Homestead Restaurant",
  description: "Home Cooking at it's finest! Since 1991.",
  logo: "https://homesteadrestaurant.ca/wp-content/uploads/2019/11/homestead-logo.png",
  locations: [
    {
      name: "Riverview",
      address: "Riverview, New Brunswick, Canada",
      phone: "(506) 386-1339",
      mapUrl: "https://goo.gl/maps/..."
    }
  ],
  social: {
    facebook: "https://facebook.com/...",
    instagram: "https://instagram.com/..."
  },
  menuCategories: [
    {
      title: "Breakfast (All Day)",
      items: [
        { name: "Country Breakfast", description: "Two eggs, two pancakes, two bacon, two sausages, homefries, toast", price: "$19.99" },
        { name: "Early Bird Special", description: "1 Egg, Bacon, Sausage or Ham, Toast, Homefries", price: "$10.99" },
        { name: "French Toast or Pancakes", description: "Served warm with syrup", price: "$12.99" }
      ]
    },
    {
      title: "Homestyle Dinners",
      items: [
        { name: "Roast Turkey", description: "White meat, potato, vegetable, coleslaw and homemade bread", price: "$22.89" },
        { name: "Country Fried Chicken", description: "Crispy fried chicken with sides", price: "$21.99" },
        { name: "Liver and Onions", description: "A classic favorite", price: "$22.99" }
      ]
    },
    {
      title: "Sandwiches & Burgers",
      items: [
        { name: "Classic Clubhouse", description: "With French fries or homefries. Best in North America!", price: "$19.99" },
        { name: "Bacon Cheeseburger", description: "Fresh patty with bacon and cheese", price: "$15.99" }
      ]
    },
    {
      title: "Decadent Desserts",
      items: [
        { name: "Homemade Pie", description: "Apple, Peanut Butter, and more", price: "$8.39" },
        { name: "Cheesecake", description: "Rich and creamy", price: "$9.99" }
      ]
    }
  ]
};
