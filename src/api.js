const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessageToAPI(message) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  return res.json();
}
