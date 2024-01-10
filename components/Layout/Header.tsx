import Image from "next/image";
import React from "react";
import { Box, Heading, Link, Paragraph } from "theme-ui";

type Props = {};

function Header({}: Props) {
  return (
    <>
      <Heading
        sx={{
          color: "primary",
          fontFamily: "heading",
          fontSize: "40px",
          my: "4rem",
          mb: "3rem",
          textAlign: "center",
        }}
      >
        Green your Bitcoin
      </Heading>
      <Box
        sx={{
          height: "400px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          alt="Calculator"
          title="Calculator"
          src={"/calc2.png"}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Paragraph sx={{ my: 20, textAlign: "center" }}>
        Bitcoin mining is incentivised by Bitcoin having value. Holding and not
        selling Bitcoin creates that value. If you hold X% of available Bitcoin
        you are incentivising X% of total mining.
        <br />
        <br />
        Below is a simple calculator that takes your Bitcoin holdings and works
        out the % of Bitcoin mining you incentivise. If you subsidise that
        amount of green mining, your Bitcoin will be carbon neutral.
        <br />
        <br />
        <b>Want to know more?</b>
        <br />
        <br />
        Read the{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://www.resistance.money/green/"
        >
          white paper
        </Link>{" "}
        at resistance.money.
        <br />
        <br />
        Listen to{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://twitter.com/thetrocro"
        >
          Troy Cross
        </Link>{" "}
        &amp;{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://twitter.com/resistancemoney"
        >
          Andrew M. Bailey
        </Link>{" "}
        explain it on:
        {/* <br />
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://smartpeopleshit.buzzsprout.com/1758058/9862508-ep47-hash-credits-green-mining-and-15-trillion-unlocked-from-esg-troy-cross"
        >
          Smart People Shit
        </Link>{" "}
        - Dennis Porter */}
        <br />
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://theprogressivebitcoiner.com/episode-5-bitcoin-philosophy-and-greening-bitcoin-with-incentive-offsets/"
        >
          The Progressive Bitcoiner
        </Link>{" "}
        Podcast
        <br />
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://www.whatbitcoindid.com/podcast/can-bitcoin-mining-save-the-environment"
        >
          What Bitcoin Did
        </Link>{" "}
        - Peter McCormack
      </Paragraph>
    </>
  );
}

export default Header;
