module.exports = {
  ...require("./crypto"),
};

// module.exports.error = (err, req, res, next) => {
//   return res.status(err.status || 500).json({
//     success: false,
//     error: {
//       message: err.message || err || "something went wrong.",
//     },
//   });
// };

module.exports.error = (err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || err || "something went wrong.");
};
