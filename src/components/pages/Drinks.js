import React from "react";

export const Drinks = (props) => {
  const { pathname } = props.location;
  let drink;
  switch (pathname) {
    case "/drinks/beer":
      drink = "Beer";
      break;
    case "/drinks/wines":
      drink = "Wines";
      break;
    case "/drinks/spirits":
      drink = "Spirits";
      break;
    case "/drinks/ipa":
      drink = "IPA Beer";
      break;
      case "/drinks/golden":
      drink = "Golden Beer";
      break;
    case "/drinks/apa":
      drink = "APA Beer";
      break;
    case "/drinks/red":
      drink = "Red Beer";
      break;
    case "/drinks/black":
      drink = "Black Beer";
      break;
    default:
      drink = "Incorrect";
      break;
  }
  return (
    <>
      <h1>You choose {drink}</h1>
    </>
  );
};
