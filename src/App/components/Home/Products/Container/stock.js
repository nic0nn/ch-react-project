function Product(name, image, description) {
  this.name = name;
  this.image = image;
  this.description = description;
}

const generatePublicURL = (image) => {
  return `assets/images/celulares/${image}`;
};

export const stock = [
  new Product(
    "Samsung A21",
    generatePublicURL("a21.jpeg"),
    "Blanco y negro. Precio: $37000"
  ),
  new Product(
    "LG K 40s",
    generatePublicURL("k40s.jpeg"),
    "Negro. Precio: $22000"
  ),
  new Product(
    "Motorola E6",
    generatePublicURL("e6.jpeg"),
    "Rosa. Precio: $18500"
  ),
  new Product(
    "Motorola E6s",
    generatePublicURL("e6s.jpeg"),
    "Gris. Precio: $19500"
  ),
];
