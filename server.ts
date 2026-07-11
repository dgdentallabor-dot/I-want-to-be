import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory / File-persisted state
const STATE_FILE_PATH = path.join(process.cwd(), "donations-state.json");
const DEFAULT_STATE = {
  currentAmount: 1452,
  goal: 300000,
  donorsCount: 1452,
};

function readState() {
  try {
    if (fs.existsSync(STATE_FILE_PATH)) {
      const data = fs.readFileSync(STATE_FILE_PATH, "utf8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading state file:", error);
  }
  return { ...DEFAULT_STATE };
}

function writeState(state: typeof DEFAULT_STATE) {
  try {
    fs.writeFileSync(STATE_FILE_PATH, JSON.stringify(state, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing state file:", error);
  }
}

// Ensure state exists
let state = readState();
writeState(state);

// Stripe dynamic initialization
let stripeClient: Stripe | null = null;
function getStripe(): Stripe | null {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return null;
  if (!stripeClient) {
    stripeClient = new Stripe(secretKey, {
      apiVersion: "2025-01-27.acंत" as any, // fallback or omit
    });
  }
  return stripeClient;
}

// API Routes
app.get("/api/stats", (req, res) => {
  res.json(state);
});

app.post("/api/stats/donate", (req, res) => {
  const amount = Number(req.body.amount || 1);
  state.currentAmount += amount;
  state.donorsCount += 1;
  writeState(state);
  res.json({ success: true, state });
});

app.get("/api/checkout-config", (req, res) => {
  const stripeEnabled = !!process.env.STRIPE_SECRET_KEY;
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY || "";
  res.json({
    stripeEnabled,
    publishableKey,
  });
});

app.post("/api/create-checkout-session", async (req, res) => {
  const appUrl = process.env.APP_URL || `http://localhost:${PORT}`;
  const stripe = getStripe();

  if (!stripe) {
    // Return mock success link as fallback when Stripe is not configured
    return res.json({
      simulated: true,
      sessionUrl: `${appUrl}?success=true&simulated=true`,
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Unnecessary Financial Contribution to a Stranger's Luxury Dreams",
              description: "A completely optional $1 donation with zero real-world returns except absolute truth.",
            },
            unit_amount: 100, // $1.00 USD
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${appUrl}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}?cancelled=true`,
    });

    res.json({ simulated: false, sessionUrl: session.url });
  } catch (error: any) {
    console.error("Stripe session creation failed:", error);
    res.status(500).json({ error: error.message || "Failed to create checkout session" });
  }
});

// Serve Frontend
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Honest Web] running on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
