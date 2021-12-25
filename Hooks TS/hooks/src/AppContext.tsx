import React, { useContext } from "react";
import CartContext from "./CartContext";

const AppContext: React.FC = () => {
  const { products } = useContext(CartContext);

  return (
    <ul>
      {products?.map((product) => (
        <li>{product.name}</li>
      ))}
    </ul>
  );
};

export default AppContext;
