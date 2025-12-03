export async function sendMessageToAPI(message) {
  const res = await fetch(import.meta.env.VITE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CLIENT-TOKEN": import.meta.env.VITE_CLIENT_TOKEN,
    },
    body: JSON.stringify({ message }),
  });

  return res.json();
}
