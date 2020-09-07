import React from "react";

export default ({ symbols }) => {
  return (
    <div className="crypto-header">
      <div>
        {symbols.map((symbol, index) => {
          if (index <= 9) return <img key={index} src={`/img/crypto/${symbol}.png`} className="indiv-img" alt={symbol} />;
        })}
      </div>
      <h1>Crypto Tracker</h1>
      <div>
        {symbols.map((symbol, index) => {
          if (index > 9) return <img key={index} src={`/img/crypto/${symbol}.png`} className="indiv-img" alt={symbol} />;
        })}
      </div>
    </div>
  );
};
