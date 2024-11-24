import React from "react";
import Card from "/src/components/Card/Card.jsx";

const TariffCards = () => {
  const tariffs = [
    {
      title: "Безлимитный 300",
      price: "300руб/мес",
      description: "Объем включенного трафика не ограничен",
      backgroundColor: "#ff6347",
    },
    {
      title: "Безлимитный 450",
      price: "450руб/мес",
      description: "Объем включенного трафика не ограничен",
      backgroundColor: "#32cd32",
    },
    {
      title: "Безлимитный 550",
      price: "550руб/мес",
      description: "Объем включенного трафика не ограничен",
      backgroundColor: "#4682b4",
    },
    {
      title: "Безлимитный 1000",
      price: "1000руб/мес",
      description: "Объем включенного трафика не ограничен",
      backgroundColor: "#ffa500",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {tariffs.map(({ title, price, description, backgroundColor }, index) => (
        <Card
          key={index}
          title={title}
          price={price}
          description={description}
          backgroundColor={backgroundColor}
          isLarge={index === 2}
        />
      ))}
    </div>
  );
};

export default TariffCards;
