import React, { useEffect, useState } from "react";

const VanillaBrandFilter = () => {
  // brands data structure
  const brands1 = [
    { id: "0a", brandName: "puma" },
    { id: "0b", brandName: "adiddas" },
    { id: "0c", brandName: "wildcraft" },
    { id: "0d", brandName: "levis" },
    { id: "0e", brandName: "celio" },
  ];

  const [brands, setBrands] = useState(brands1);

  const onBrandSearch = (e) => {
    const { value } = e.target;
    const filteredBrands = brands1.filter((brand) =>
      brand.brandName.includes(value)
    );
    setBrands([...filteredBrands]);
  };

  return (
    <div>
      <h1>Brand Filter</h1>
      <label htmlFor="">
        Search for brands
        <input
          type="text"
          onChange={(e) => {
            onBrandSearch(e);
          }}
        />
      </label>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
    </div>
  );
};

export default VanillaBrandFilter;
