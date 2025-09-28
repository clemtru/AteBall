import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Simple health route
app.get("/health", (_req, res) => res.json({ ok: true }));

// Placeholder recommend route (returns fake restaurant)
app.post("/recommend", (req, res) => {
  const { lat, lon } = req.body || {};
  res.json({
    decision_id: "dec_demo",
    place: {
      place_id: "demo_123",
      name: "AteBall Demo Diner",
      cuisines: ["American"],
      price: "$$",
      rating: 4.3,
      reviews: 250,
      distance_m: 800,
      open_now: true,
      lat: lat ?? 34.063,
      lon: lon ?? -118.445,
      photo_url: null,
      website: null,
      phone: null
    },
    why: ["Close by", "Open now", "Good reviews"],
    reroll_remaining: 2
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on :${port}`));
