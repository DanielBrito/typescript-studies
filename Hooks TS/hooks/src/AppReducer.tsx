import React, { useReducer } from "react";

interface Cart {
  products: string[];
  shippingValue?: number;
}

type CartActionType = {
  type: "ADD_PRODUCT" | "REMOVE_PRODUCT";
};

const AppReducer: React.FC = () => {
  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch (action.type) {
        case "ADD_PRODUCT":
          return {
            ...state,
            products: [...state.products, "Produto novo"],
          };
        default:
          return state;
      }
    },
    {
      products: [""],
      shippingValue: 0,
    }
  );

  return <div>Teste</div>;
};

export default AppReducer;
