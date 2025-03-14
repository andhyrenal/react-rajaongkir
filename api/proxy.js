export default async function handler(req, res) {
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.status(200).end();
      return;
    }
  
    try {
      const { pathname, search } = new URL(req.url, `https://${req.headers.host}`);
      const targetUrl = `https://rajaongkir.komerce.id/api/v1${pathname.replace(/^\/api/, "")}${search}`;
  
      const response = await fetch(targetUrl, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
          ...req.headers, // Meneruskan headers dari frontend
        },
        body: req.method !== "GET" ? JSON.stringify(req.body || {}) : null,
      });
  
      const data = await response.json();
  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
      return res.status(response.status).json(data);
    } catch (error) {
      console.error("Error fetching API:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  