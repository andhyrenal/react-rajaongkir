export default async function handler(req, res) {
    try {
      const response = await fetch(`https://rajaongkir.komerce.id/api/v1${req.url}`, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
          ...req.headers, // Forward headers dari frontend
        },
        body: req.method !== "GET" ? JSON.stringify(req.body) : null,
      });
  
      const data = await response.json();
  
      res.setHeader("Access-Control-Allow-Origin", "*"); // Izinkan semua domain
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
      return res.status(response.status).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }