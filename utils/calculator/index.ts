export const LOST_COINS = 3000000;

export const S19_HASHRATE = 110;

export default function gciCalculator({
  btcHoldings,
  totalSupply,
  hashRate,
}: {
  btcHoldings: number;
  totalSupply: number;
  hashRate: number;
}) {
  const effectiveTotal = totalSupply - LOST_COINS;
  const fractionOfSupply = btcHoldings / effectiveTotal;
  const percentOfSupply = fractionOfSupply * 100;

  const hashRateToMine = hashRate * fractionOfSupply;

  const s19Count = hashRateToMine / S19_HASHRATE;

  return {
    percentOfSupply,
    hashRateToMine,
    s19Count,
    effectiveTotal,
    lostCoins: LOST_COINS,
    s19Hashrate: S19_HASHRATE,
  };
}
