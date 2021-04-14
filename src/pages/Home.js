import React from "react";
import { Carousel } from "../components/Carousel/Carousel";
import { ItemsList } from "../components/Items/ListItems/ItemsList";
import './Home.css';

export const Home = () => {
  return (
    <>
        <Carousel />
        <ItemsList />
    </>
  );
};
