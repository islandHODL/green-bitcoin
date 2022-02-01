import { addDays, addMonths } from "date-fns";

const API_KEY = process.env.GLASSNODE_API_KEY;

const API_URL_BASE = "https://api.glassnode.com/v1";

type GlassNodeReturnItem = {
  v: number;
  t: number;
};

async function glassnodeFetcher(endpoint: string, params: any) {
  if (!process.env.GLASSNODE_API_KEY)
    throw new Error("Glassnode API Key Not Found");
  const fetchParams = {
    ...params,
    a: "btc",
    api_key: process.env.GLASSNODE_API_KEY,
  };

  console.log(endpoint, fetchParams);

  const url = new URL(`${API_URL_BASE}${endpoint}`);
  url.search = new URLSearchParams(fetchParams).toString();

  console.log(url.toString());
  const response = await fetch(url.toString());
  const res = (await response.json()) as GlassNodeReturnItem[];
  console.log(res);
  return res;
}

const getAverageHashRate = (hashHistory: GlassNodeReturnItem[]): number => {
  return Math.round(
    hashHistory.map((m) => m.v).reduce((partial_sum, a) => partial_sum + a, 0) /
      3
  );
};

export const fetchHashRate = async () => {
  const hashHistory = await glassnodeFetcher("/metrics/mining/hash_rate_mean", {
    i: "1month",
    s: Math.round(addMonths(new Date(), -3).getTime() / 1000).toString(),
  });

  return getAverageHashRate(hashHistory) / 1000000000000; // turn H/s into TH/s (divide by trillion)
};

export const fetchTotalSupply = async () => {
  const results = await glassnodeFetcher("/metrics/supply/current", {
    i: "24h",
    s: Math.round(addDays(new Date(), -2).getTime() / 1000).toString(),
  });

  // console.log("totalSup", results);

  return results && results.length ? results[results.length - 1].v : 0;
};
