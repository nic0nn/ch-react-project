const generatePublicURL = (image) => {
  return `/assets/images/${image}`;
};

export const stock = [
  {
    _id: "1",
    name: "Samsung A21",
    image: generatePublicURL("a21.jpeg"),
    description: "Blanco y negro",
    price: 37000,
    category: "celulares",
    stock: 4
  },
  {
    _id: "2",
    name: "LG K 40s",
    image: generatePublicURL("k40s.jpeg"),
    description: "Negro",
    price: 22000,
    category: "celulares",
    stock: 10
  },
  {
    _id: "3",
    name: "Motorola E6",
    image: generatePublicURL("e6.jpeg"),
    description: "Rosa",
    price: 18500,
    category: "celulares",
    stock: 1
  },
  {
    _id: "4",
    name: "Motorola E6s",
    image: generatePublicURL("e6s.jpeg"),
    description: "Gris",
    price: 19500,
    category: "celulares",
    stock: 20
  },
  {
    _id: "5",
    name: "Cargador Royalcell",
    image: generatePublicURL("royalcell.jpg"),
    description: "3.8A V8",
    price: 400,
    category: "accesorios",
    stock: 3
  },
  {
    _id: "6",
    name: "Instalación de Windows",
    image: generatePublicURL("windows.png"),
    description: "Incluye backup de datos",
    price: 3000,
    category: "servicios",
    stock: 10
  },
]
