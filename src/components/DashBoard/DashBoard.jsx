import React from "react";
import styles from "./DashBoard.module.scss";
import BeerCard from "../BeerCard";

const DashBoard = (props) => {

  const { beers } = props;

  const getBeerJsx = (beer) => (
    <div className={styles.beerCard}>
      <BeerCard beer={beer} />
    </div>
  )

  return (
    <>
      <section>{beers.map(getBeerJsx)}</section>
    </>
  );
};

export default DashBoard;