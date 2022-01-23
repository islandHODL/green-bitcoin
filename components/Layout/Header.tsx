import React from "react";
import { Heading, Link, Paragraph } from "theme-ui";

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
      <Paragraph sx={{ my: 20, textAlign: "center" }}>
        What is this? Read the{" "}
        <Link
          target={"_blank"}
          rel="noreferrer"
          href="https://www.resistance.money/green/"
        >
          white paper
        </Link>{" "}
        at resistance.money to learn more.
      </Paragraph>
    </>
  );
}

export default Header;
