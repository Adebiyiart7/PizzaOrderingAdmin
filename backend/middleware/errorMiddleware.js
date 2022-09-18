const errorMiddleware = (err, req, res, nex) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  req.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? null : err.stack,
  });
};

module.exports = {
  errorMiddleware,
};
