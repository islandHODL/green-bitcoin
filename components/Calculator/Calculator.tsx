import React, { useState } from "react";
import { Card, Box, Paragraph, Heading, Input } from "theme-ui";
import gciCalculator from "../../utils/calculator";

type Props = {
  totalSupply: number;
  hashRate: number;
};

function Calculator(props: Props) {
  const [btc, setBtc] = useState(100);

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
        <Box
          sx={{
            textAlign: "center",
            flex: "0 0 50%",
            borderBottom: "1px solid grey",
          }}
        >
          <Paragraph>Enter your bitcoin holdings</Paragraph>

          <Heading>
            <Input
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
              max={props.totalSupply}
              type="number"
              value={btc}
              onChange={(e) => setBtc(parseFloat(e.currentTarget.value))}
            />
          </Heading>
        </Box>
        <Box sx={{ mt: "20px", textAlign: "center" }}>
          <Paragraph>{btc.toLocaleString()} btc incentivises</Paragraph>
          <Heading>
            <b>{hashRateToMine.toLocaleString()}</b>
            <small>TH/s of mining</small>
          </Heading>
          <Paragraph>
            Or {Math.round(s19Count).toLocaleString()} Antminer s19 Pros at{" "}
            {s19Hashrate} TH/s
          </Paragraph>
        </Box>
      </Card>

      <Heading sx={{ textAlign: "center", mt: "20px" }}>
        How is this calculated?
      </Heading>

      <Box sx={{ textAlign: "center" }}>
        <Paragraph>
          Given a total BTC supply of{" "}
          <b>{props.totalSupply.toLocaleString()}</b> btc
          <br />
          and if we assume <b>{lostCoins.toLocaleString()}</b> btc to be lost.
          <br />
          This leaves an effective total supply of
        </Paragraph>
        <Heading>
          {effectiveTotal.toLocaleString()} <small>btc</small>
        </Heading>
        <Paragraph>of which you hold:</Paragraph>
        <Heading sx={{ mb: 20 }}>
          <b>{percentOfSupply}%</b>
        </Heading>

        <Paragraph>
          Applying this percentage to the 3 month average global hashrate of:
        </Paragraph>
        <Heading>{props.hashRate.toLocaleString()} TH/s</Heading>
        <Paragraph sx={{ mt: 20 }}>
          gives us the hashrate that your holdings incentivise:
        </Paragraph>
        <Heading>
          <b>{hashRateToMine.toLocaleString()}</b> TH/s
        </Heading>
        <Paragraph>
          Or {Math.round(s19Count).toLocaleString()} Antminer s19 Pros at{" "}
          {s19Hashrate} TH/s
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
