import React from "react";

export default ({ cards }) => {
  const cardsJsx = cards.map((card, index) => {
    const {
      name,
      symbol,
      quote: {
        USD: { market_cap, percent_change_1h, percent_change_7d, percent_change_24h, price },
      },
    } = card;
    return (
      <div key={index}>
        <img src={`/img/crypto/${symbol}.png`} className="indiv-img" alt={name} />
        <h3>{`${name} ~ ${symbol}`}</h3>
        <b>Price(USD): ${price.toFixed(4)} </b>
        <i>
          ***Market Cap***
          <br />
          {market_cap}
        </i>
        <br />
        <span>
          Change 1 Hour:{" "}
          <span className={Math.sign(percent_change_1h) === 1 ? "positive" : "negative"}>{percent_change_1h.toFixed(2)}</span>
        </span>
        <span>
          Change 1 Day:{" "}
          <span className={Math.sign(percent_change_24h) === 1 ? "positive" : "negative"}>{percent_change_24h.toFixed(2)}</span>
        </span>
        <span>
          Change 1 Week:{" "}
          <span className={Math.sign(percent_change_7d) === 1 ? "positive" : "negative"}>{percent_change_7d.toFixed(2)}</span>
        </span>
      </div>
    );
  });
  return <div className="crypto-body">{cardsJsx}</div>;
};
