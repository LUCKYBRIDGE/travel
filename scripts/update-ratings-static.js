const fs = require("fs");

const baseUrl =
  process.env.RATINGS_BASE_URL || "https://travel.lucky20220528.workers.dev";
const outputPath = process.env.RATINGS_OUTPUT || "ratings.json";

async function fetchSnapshot() {
  const response = await fetch(`${baseUrl}/api/ratings`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ratings: ${response.status}`);
  }
  return response.json();
}

async function main() {
  const snapshot = await fetchSnapshot();
  fs.writeFileSync(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
  const count = snapshot.items ? Object.keys(snapshot.items).length : 0;
  console.log(`Saved ${count} ratings to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
