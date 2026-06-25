import fetch from "node-fetch";

// Vérification officielle Pi Network
export const verifyPiToken = async (accessToken) => {
  const response = await fetch("https://api.minepi.com/v2/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    throw new Error("Invalid Pi access token");
  }

  const user = await response.json();

  return {
    uid: user.uid,
    username: user.username
  };
};
