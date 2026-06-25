export const errorHandler = (err, req, res, next) => {
  console.error("HOÏ-PROTOCOL ERROR:", err);

  res.status(500).json({
    error: "Internal Server Error"
  });
};
