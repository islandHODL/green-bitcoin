import React from "react";
import { Box, Paragraph, Link } from "theme-ui";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box sx={{ textAlign: "center", mt: 30 }}>
      <Paragraph>Feedback welcome</Paragraph>
      <Paragraph sx={{ fontSize: 1, mt: 30 }}>
        This is an experimental calculator contact any of us on twitter or
        github with your comments.
      </Paragraph>
      <Paragraph sx={{ fontSize: 1, mt: 30 }}></Paragraph>
      <Paragraph sx={{ fontSize: 1, mt: 30 }}>
        Built by IslandHODL{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="http://twitter.com/islandhodl"
        >
          Twitter
        </Link>{" "}
        /{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/islandHODL/green-bitcoin"
        >
          Github
        </Link>
        <br />
        Inspired by{" "}
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
        at{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://www.resistance.money/green/"
        >
          Resistance.money
        </Link>
        <br />
        Hashrate and total supply from{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="http://twitter.com/glassnode"
        >
          @glassnode
        </Link>
      </Paragraph>
    </Box>
  );
};

export default Footer;
