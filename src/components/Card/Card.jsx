import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, price, description, backgroundColor, isLarge }) => {
  const classes = `${styles.card} ${isLarge && styles.large}`;

  return (
    <div className={classes} style={{ backgroundColor }}>
      <h3>{title}</h3>
      <h1>{price}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
