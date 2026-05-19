import React from "react";
import CardProductComponent from "../../components/CardProductComponent";
import { productType } from "@/lib/product";

export default function ProductPage() {
  const products: productType[] = [
    {
      id: 1,
      title: "FJALLRAVEN - FOLDSACK NO.",
      description:
        "Your perfect pack for everyday use and walks in the forest.",
      image:
        "https://i.pinimg.com/736x/12/76/15/127615149082bec98080043e23a016fc.jpg",
      price: 109.95,
    },
    {
      id: 2,
      title: "MENS CASUAL PREMIUM SLIM",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley.",
      image:
        "https://i.pinimg.com/736x/17/bb/40/17bb4008f8f31fd4462a3809d4e2c6fe.jpg",
      price: 22.3,
    },
    {
      id: 3,
      title: "MENS COTTON JACKET",
      description: "Great outerwear jackets for Spring/Autumn/Winter.",
      image:
        "https://i.pinimg.com/736x/ac/d2/43/acd2435c8bd5ba66f0cc7dbf14499eae.jpg",
      price: 55.99,
    },
    {
      id: 4,
      title: "MENS CASUAL SLIM FIT",
      description:
        "The color could be slightly different between on the screen.",
      image:
        "https://i.pinimg.com/1200x/9c/02/78/9c02785cb43f14311c54c17c218cfd49.jpg",
      price: 15.99,
    },
    {
      id: 5,
      title: "JOHN HARDY WOMEN'S LEGEND",
      description:
        "From our Legends Collection, the Naga was inspired by the mythical.",
      image:
        "https://i.pinimg.com/1200x/72/fb/32/72fb32841d8745787136e9499e505e4f.jpg",
      price: 695,
    },
    {
      id: 6,
      title: "SOLID GOLD PETITE MICROPAVE",
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      image:
        "https://i.pinimg.com/1200x/cc/be/60/ccbe607ae6eabcdc6753ebb481158057.jpg",
      price: 168,
    },
    {
      id: 7,
      title: "WHITE GOLD PLATED PRINCESS",
      description: "Classic Created Wedding Engagement Solitaire Diamond Ring.",
      image:
        "https://i.pinimg.com/1200x/73/08/7e/73087e412053e7b96583ca004547fe08.jpg",
      price: 9.99,
    },
    {
      id: 8,
      title: "PIERCED OWL ROSE GOLD PLA",
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
      image:
        "https://i.pinimg.com/1200x/9c/02/78/9c02785cb43f14311c54c17c218cfd49.jpg",
      price: 10.99,
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {products.map((product) => (
        <CardProductComponent key={product.id} {...product} />
      ))}
    </div>
  );
}