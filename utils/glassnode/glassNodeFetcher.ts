import { addDays, addHours, addMonths } from "date-fns";

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

  console.log("fetchUrl", url.toString());
  // try {
  const response = await fetch(url.toString());
  if (response.status !== 200) {
    console.error(response.status, response.statusText);
    return [];
  }
  // throw new Error("Glassnode Fetch Error")};

  const res = (await response.json()) as GlassNodeReturnItem[];
  console.log(res);
  return res;
  // } catch (error) {
  //   console.error(error);
  //   throw new Error("Glassnode Fetch Error");
  //   return [];
  // }
}

const bInfo = {
  timestamp: 1.704904227e12,
  market_price_usd: 44845.71,
  hash_rate: 4.984983561735338e11,
  total_fees_btc: -85625000000,
  n_btc_mined: 85625000000,
  n_tx: 370358,
  n_blocks_mined: 137,
  minutes_between_blocks: 9.8971,
  totalbc: 1959474375000000,
  n_blocks_total: 825159,
  estimated_transaction_volume_usd: 7.506783214944486e9,
  blocks_size: 249728220,
  miners_revenue_usd: 0.0,
  nextretarget: 826559,
  difficulty: 73197634206448,
  estimated_btc_sent: 16739133386325,
  miners_revenue_btc: 0,
  total_btc_sent: 123280039503794,
  trade_volume_btc: 11897.76,
  trade_volume_usd: 5.335634946096e8,
};

export type BlockchainInfoStats = typeof bInfo;

export async function blockchainFetcher() {
  const response = await fetch("https://api.blockchain.info/stats");

  if (response.ok) {
    return (await response.json()) as BlockchainInfoStats;
  } else return undefined;
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

  console.log("hashHistory", hashHistory);

  return getAverageHashRate(hashHistory) / 1000000000000; // turn H/s into TH/s (divide by trillion)
};

export const fetchTotalSupply = async () => {
  const results = await glassnodeFetcher("/metrics/supply/current", {
    i: "24h",
    s: Math.round(addDays(new Date(), -2).getTime() / 1000).toString(),
  });

  console.log("totalSup", results);

  return results && results.length ? results[results.length - 1].v : 0;
};

export const fetchUSDPrice = async () => {
  const results = await glassnodeFetcher("/metrics/market/price_usd_close", {
    i: "1h",
    s: Math.round(addHours(new Date(), -3).getTime() / 1000).toString(),
  });

  console.log("usdPrice", results);

  return results && results.length ? results[results.length - 1].v : 0;
};
