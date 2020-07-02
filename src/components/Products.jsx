import React from "react";
import BaseCardText from "./builders/BaseCardText";
const Products = () => {
  const productInfo = [
    {
      id: 1,
      nom: "LookUp",
      prix: 45.99,
      descriptif:
        "this is a fancy product with some nice text talking about it",
      image:
        "https://mlodp7767kae.i.optimole.com/ZvkZDw-upSZOLoJ/w:840/h:630/q:auto/https://kickstore.fr/wp-content/uploads/2019/06/lookup2.png",
    },
  ];
  return (
    <div>
      <BaseCardText
        item={Object.keys(productInfo[0])[0]}
        value={productInfo[0].id}
        dataArray={productInfo}
      />
      <BaseCardText
        item={Object.keys(productInfo[0])[1]}
        value={productInfo[0].nom}
        dataArray={productInfo}
      />
      <BaseCardText
        item={Object.keys(productInfo[0])[2]}
        value={productInfo[0].prix}
        dataArray={productInfo}
      />
      <BaseCardText
        item={Object.keys(productInfo[0])[3]}
        value={productInfo[0].descriptif}
        dataArray={productInfo}
      />
      <BaseCardText
        item={Object.keys(productInfo[0])[4]}
        value={productInfo[0].image}
        dataArray={productInfo}
      />
    </div>
  );
};

export default Products;
