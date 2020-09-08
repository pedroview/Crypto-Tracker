import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Footer from "./footer";
import Card from "./cards";

import "../style/app.scss";

export default () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.NODE_ENV === "production" ? "/cryptocurrency" : "http://localhost:5000/cryptocurrency")
      .then(({ data }) => {
        setCard(data.data);
      })
      .catch((err) => {
        setCard([]);
      });
  }, []);

  const symbols = card.map((x) => x?.symbol);

  return (
    <>
      <Header symbols={symbols} />
      <Card cards={card} />
      <Footer />
    </>
  );
};
