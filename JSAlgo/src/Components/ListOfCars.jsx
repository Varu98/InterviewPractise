import React, { useState } from "react";
export const data = [
  {
    id: "c1",
    brand: "Toyota",
    make: "Corolla",
    model: "2007",
  },
  {
    id: "c2",
    brand: "Maruti Suzuki",
    make: "Omni",
    model: "2003",
  },
  {
    id: "c3",
    brand: "Hyundai",
    make: "Santro",
    model: "2005",
  },
];

const ListOfCars = () => {
  const [cars, setCars] = useState(data);

  const [newCar, setNewCar] = useState({
    make: null,
    model: "",
    brand: "",
  });

  const addNewCar = (e) => {
    const { name, value } = e.target;
    setNewCar((prev) => ({ ...prev, [name]: value }));
    console.log(newCar);
  };

  const onSubmitAddCar = (e) => {
    e.preventDefault();
    setCars((prev) => [...prev, newCar]);
    console.log(cars);
  };
  return (
    <div>
      <h1>List Of Cars</h1>
      <ul>
        {cars.map((car) => (
          <ul key={car.id}>
            <hr />
            <li>{car.brand}</li>
            <li>{car.make}</li>
            <li>{car.model}</li>
          </ul>
        ))}
      </ul>
      <div>
        <h3>Add new car</h3>
        <form action="">
          <label htmlFor="">
            Car Model{" "}
            <input name="model" type="text" onChange={(e) => addNewCar(e)} />
          </label>
          <label htmlFor="">
            Car Make{" "}
            <input name="make" type="text" onChange={(e) => addNewCar(e)} />
          </label>
          <label htmlFor="">
            Car Brand{" "}
            <input name="brand" type="text" onChange={(e) => addNewCar(e)} />
          </label>
          <button
            type="submit"
            onClick={(e) => {
              onSubmitAddCar(e);
              console.log(cars);
            }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListOfCars;
