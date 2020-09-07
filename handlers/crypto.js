const fakeResult = require("./fakeResult.json");
const rp = require("request-promise");

exports.crypto = async (req, res, next) => {
  try {
    const requestOptions = {
      method: "GET",
      // uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
      uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      qs: {
        start: "1",
        limit: "20",
        convert: "USD",
      },
      headers: {
        "X-CMC_PRO_API_KEY": process.env.APITOKEN,
      },
      json: true,
      gzip: true,
    };
    // return fake API if in development or no network
    if (process.env.NODE_ENV === "production") {
      rp(requestOptions)
        .then((response) => {
          // console.log("API call response:", response);
          return res.status(200).send(response);
        })
        .catch((err) => {
          // console.log("API call error:", err.message);
          return res.status(200).send(err);
        });
    } else {
      return res.status(200).send(fakeResult);
    }
  } catch (err) {
    return next({
      status: 400,
      message: err,
    });
  }
};
