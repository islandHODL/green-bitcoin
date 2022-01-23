import React from "react";
import { Box, Paragraph, Link } from "theme-ui";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box>
      <Paragraph sx={{ fontSize: 1, mt: 30 }}>
        Hashrate from{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="http://twitter.com/glassnode"
        >
          @glassnode
        </Link>
        <br />
        Built by{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="http://twitter.com/islandHODL"
        >
          @islandHODL
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
      </Paragraph>
    </Box>
  );
};

export default Footer;
