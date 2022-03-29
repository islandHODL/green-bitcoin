import React from "react";
import { Box, Paragraph, Link, Heading } from "theme-ui";

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

      <Heading sx={{ fontSize: "16px" }} mt="20px">
        A note on privacy and 'Vercel Insights'
      </Heading>

      <Paragraph sx={{ fontSize: "12px" }} my="20px">
        There is no data collected by this webpage, the numbers you put into the
        calculator are not stored anywhere.
        <br />
        <br />
        The calculator is currently hosted for free by{" "}
        <Link target={"_blank"} rel="noreferrer" href="https://vercel.com/">
          Vercel
        </Link>
        , who provide continous integration and a very easy developer
        experience. Some visitors noted the api call to vercel-insights.com in
        the developer tab. These insights simply store the time it took to load
        the website. There is no other data stored or collected and I can't
        switch them off.
        <br />
        <br />
        See this{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://twitter.com/IslandHodl/status/1508819554796982273?s=20&t=T70MqaVhgtzIF9meN7PBJQ"
        >
          twitter thread
        </Link>{" "}
        for more details.
      </Paragraph>
    </Box>
  );
};

export default Footer;
