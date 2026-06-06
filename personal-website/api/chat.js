/**
 * Vercel Serverless Function (CommonJS)
 * Path: /api/chat
 *
 * This proxy avoids browser CORS restrictions by calling OpenAI from the server.
 * Configure environment variables on Vercel:
 * - OPENAI_API_KEY (required)
 * - OPENAI_MODEL (optional, default model if client doesn't pass)
 */

module.exports = async function handler(req, res) {
  // CORS (helpful for local preview / custom domains)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({
      error:
        "Missing OPENAI_API_KEY. Please set it in Vercel project environment variables.",
    });
    return;
  }

  try {
    const body = req.body || {};
    const model = body.model || process.env.OPENAI_MODEL || "gpt-4o-mini";

    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ ...body, model }),
    });

    const text = await upstream.text();
    res.status(upstream.status);
    // Preserve content-type if possible
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json; charset=utf-8");
    res.send(text);
  } catch (e) {
    res.status(500).json({ error: e?.message || String(e) });
  }
};
