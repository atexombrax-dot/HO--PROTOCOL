import { verifyPiToken } from "../services/piService.js";

export const authenticatePiUser = async (req, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(400).json({ error: "accessToken required" });
  }

  try {
    const user = await verifyPiToken(accessToken);

    return res.json({
      success: true,
      user
    });

  } catch (error) {
    return res.status(401).json({
      error: "Pi authentication failed",
      details: error.message
    });
  }
};
