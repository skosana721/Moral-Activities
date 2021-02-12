const initialState = {
  products: [
    {
      id: 1,
      img: "",
      brand: "Nike Air",
      model: "Jordan 6",
      price: 3200,
      amount: 1,
    },
    {
      id: 2,
      img: "",
      brand: "Adidas",
      model: "Yeezy 350 v2 ",
      price: 3500,
      amount: 1,
    },
    {
      id: 3,
      img: "",
      brand: "Nike",
      model: "LeBron 15",
      price: 2800,
      amount: 1,
    },
    {
      id: 4,
      img: "",
      brand: "PUMA x Les Benjamins",
      model: "Storm",
      price: 2000,
      amount: 1,
    },
    {
      id: 5,
      img: "",
      brand: "NEW BALANCE X KITH",
      model: "1300 Mauve Sole",
      price: 2500,
      amount: 1,
    },
    {
      id: 6,
      img: "",
      brand: "Nike Air",
      model: "Jordan 14",
      price: 3500,
      amount: 1,
    },
    {
      id: 7,
      img: "",
      brand: "Adidas",
      model: "UltraBoot 21",
      price: 3000,
      amount: 1,
    },
    {
      id: 8,
      img: "",
      brand: "Adidas",
      model: "EQT BASK ADV ",
      price: 1899,
      amount: 1,
    },
    {
      id: 9,
      img: "",
      brand: "Puma",
      model: "Uproar Palace Guard",
      price: 2199,
      amount: 1,
    },
    {
      id: 10,
      img: "",
      brand: "NEW BALANCE X BODEGA",
      model: "997S 'Better Days'",
      price: 2299,
      amount: 1,
    },
  ],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
