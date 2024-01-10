import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Calculator from "../components/Calculator/Calculator";
import {
  blockchainFetcher,
  fetchHashRate,
  fetchTotalSupply,
  fetchUSDPrice,
} from "../utils/glassnode/glassNodeFetcher";

type HomeProps = {
  hashRate: number;
  totalSupply: number;
  usdPrice: number;
};

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Green your Bitcoin</title>
        <meta
          name="description"
          content="Calculate how to green your bitcoin holdings with sustainable mining incentives."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Calculator {...props} />
    </>
  );
};
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const info = await blockchainFetcher();

  const hashRate = (info?.hash_rate || 0) / 1000;
  const totalSupply = (info?.totalbc || 0) / 100000000; //await fetchTotalSupply();
  const usdPrice = info?.market_price_usd || 0; //await fetchUSDPrice();
  console.log("getStaticProps", { hashRate, totalSupply, usdPrice });
  return {
    props: {
      hashRate,
      totalSupply,
      usdPrice,
    },
    revalidate: 20,
  };
};

export default Home;
