const initialState = {
  profile: { name: " ", surname: "" },
  products: [
    { id: 1, img: "", brand: "Nike Air", model: "Jordan 6", price: "" },
    { id: 2, img: "", brand: "Adidas", model: "Yeezy 350 v2 ", price: "" },
    { id: 3, img: "", brand: "Nike", model: "LeBron 15", price: "" },
    {
      id: 4,
      img: "",
      brand: "PUMA x Les Benjamins",
      model: "Storm",
      price: "",
    },
    {
      id: 5,
      img: "",
      brand: "NEW BALANCE X KITH",
      model: "1300 Mauve Sole",
      price: "",
    },
    { id: 6, img: "", brand: "Nike Air", model: "Jordan 14", price: "" },
    { id: 7, img: "", brand: "Adidas", model: "UltraBoot 21", price: "" },
    { id: 8, img: "", brand: "Adidas", model: "EQT BASK ADV ", price: "" },
    { id: 9, img: "", brand: "Puma", model: "Uproar Palace Guard", price: "" },
    {
      id: 10,
      img: "",
      brand: "NEW BALANCE X BODEGA",
      model: "997S 'Better Days'",
      price: "",
    },
  ],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
