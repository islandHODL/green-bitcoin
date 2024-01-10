import React, { useState } from "react";
import {
  Card,
  Box,
  Paragraph,
  Heading,
  Input,
  Switch,
  Flex,
  Label,
} from "theme-ui";
import gciCalculator from "../../utils/calculator";
import NumberFormattedInput from "../Forms/NumberFormattedInput";
import localNumber from "../Forms/parseFormated";

type Props = {
  totalSupply: number;
  hashRate: number;
  usdPrice: number;
};

const { formatNumber: formatDollars } = localNumber("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
  currencyDisplay: "symbol",
});
const { formatNumber: formatBitcoin } = localNumber("en-US", {
  style: "currency",
  currency: "BTC",
  minimumFractionDigits: 0,
  maximumFractionDigits: 8,
  currencyDisplay: "symbol",
});

const { formatNumber: formatS19 } = localNumber("en-US", {
  // style:"un",
  // currency: "BTC",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
  // currencyDisplay: "symbol",
});

function Calculator(props: Props) {
  const [btc, setBtc] = useState(100);

  const [dollarMode, setDollarMode] = useState(false);

  // const [hashRate, setHashRate] = useState(props.hashRate);

  // const [lostCoins, setLostCoins] = useState(3000000);

  const {
    hashRateToMine,
    percentOfSupply,
    s19Count,
    effectiveTotal,
    s19Hashrate,
    lostCoins,
  } = gciCalculator({
    btcHoldings: btc,
    totalSupply: props.totalSupply,
    hashRate: props.hashRate,
  });

  return (
    <>
      <Card sx={{ border: "1px solid grey", borderRadius: "10px", p: "20px" }}>
        <Paragraph sx={{ textAlign: "center" }}>Select currency</Paragraph>
        <Paragraph sx={{ textAlign: "center" }}>
          (1 BTC = {formatDollars(props.usdPrice)})
        </Paragraph>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <Label sx={{ width: "auto" }} htmlFor="currency-mode">
            Bitcoin
          </Label>
          <Box sx={{ flex: "0 0 auto", mx: "10px" }}>
            <Switch
              checked={dollarMode}
              onChange={() => setDollarMode((o) => !o)}
              id="currency-mode"
            />
          </Box>
          <Label sx={{ width: "auto" }} htmlFor="currency-mode">
            US Dollars
          </Label>
        </Flex>
        <Box
          sx={{
            textAlign: "center",
            flex: "0 0 50%",
            borderBottom: "1px solid grey",
          }}
        >
          <Paragraph>
            Enter your {dollarMode ? "dollar investment" : "bitcoin holdings"}
          </Paragraph>

          <Heading>
            <NumberFormattedInput
              sx={{
                width: "100%",
                border: "0px",

                ":focus": {
                  outline: "0px",
                },

                display: "block",
                textAlign: "center",
                fontSize: "50px",
                fontWeight: "bold",
                p: 0,
                m: 0,
                mx: "auto",
                mt: "5px",
              }}
              min={0}
              max={dollarMode ? undefined : props.totalSupply}
              // type="number"

              step={dollarMode ? 1000 : 0.1}
              value={dollarMode ? Math.round(btc * props.usdPrice) : btc}
              onChange={(e) => setBtc(dollarMode ? e / props.usdPrice : e)}
              formatOptions={{
                currency: dollarMode ? "USD" : "BTC",
                minimumFractionDigits: 0,
                maximumFractionDigits: dollarMode ? 2 : 8,
              }}
            />
          </Heading>
        </Box>
        <Box sx={{ mt: "20px", textAlign: "center" }}>
          <Paragraph>{formatBitcoin(btc)} incentivises</Paragraph>
          <Heading>
            <b>{hashRateToMine.toLocaleString()}</b>
            <small>TH/s of mining</small>
          </Heading>
          <Paragraph>
            Or {formatS19(s19Count)} Antminer s19 Pros at {s19Hashrate} TH/s
          </Paragraph>
        </Box>
      </Card>

      <Heading sx={{ textAlign: "center", mt: "20px" }}>
        How is this calculated?
      </Heading>

      <Box sx={{ textAlign: "center" }}>
        <Paragraph>
          Given a total BTC supply of <b>{formatBitcoin(props.totalSupply)}</b>
          <br />
          and if we assume <b>{formatBitcoin(lostCoins)}</b> to be lost.
          <br />
          This leaves an effective total supply of
        </Paragraph>
        <Heading>{formatBitcoin(effectiveTotal)}</Heading>
        <Paragraph>of which you hold:</Paragraph>
        <Heading sx={{ mb: 20 }}>
          <b>{percentOfSupply}%</b>
        </Heading>

        <Paragraph>
          Applying this percentage to the average global hashrate of:
        </Paragraph>
        <Heading>{props.hashRate.toLocaleString()} TH/s</Heading>
        <Paragraph sx={{ mt: 20 }}>
          gives us the hashrate that your holdings incentivise:
        </Paragraph>
        <Heading>
          <b>{hashRateToMine.toLocaleString()}</b> TH/s
        </Heading>
        <Paragraph>
          Or {formatS19(s19Count)} Antminer s19 Pros at {s19Hashrate} TH/s
        </Paragraph>
        <Paragraph sx={{ mt: 20 }}>
          To ensure your BTC holdings are carbon neutral you can mine this
          amount or more with renewable energy, or purchase an equivalent Green
          Co-investment (GCI) instrument.
        </Paragraph>
      </Box>
    </>
  );
}

export default Calculator;
