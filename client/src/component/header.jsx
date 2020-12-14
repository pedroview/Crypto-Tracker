import React from "react";

export default ({ symbols: propsymbols }) => {
  const symbols = propsymbols.filter((x) => !["LINK", "DOT", "BSV", "CRO", "USDC", "LEO"].includes(x));

  return (
    <div className="crypto-header">
      <div>
        {symbols.map((symbol, index) => {
          if (index < 5) return <img key={index} src={`/img/crypto/${symbol}.png`} className="indiv-img" alt={symbol} />;
        })}
      </div>
      <h1>Crypto Tracker</h1>
      <div>
        {symbols.map((symbol, index) => {
          if (index >= 5 && index <= 7) return <img key={index} src={`/img/crypto/${symbol}.png`} className="indiv-img" alt={symbol} />;
        })}
      </div>
    </div>
  );
};
