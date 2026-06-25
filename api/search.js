export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { q, tbm, start } = req.query;
  const API_KEY = "adbe7e70353ffb4238a007294b173c28b248e9fdfc731ca89d53df6265f09a16";
  const url = `https://serpapi.com/search.json?q=${encodeURIComponent(q)}&tbm=${tbm || ""}&start=${start || 0}&api_key=${API_KEY}&engine=google`;
  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data);
  } catch(e) {
    res.status(500).json({ error: "Search failed" });
  }
}
