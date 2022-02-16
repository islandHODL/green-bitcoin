import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Calculator from "../components/Calculator/Calculator";
import {
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
  const hashRate = await fetchHashRate();
  const totalSupply = await fetchTotalSupply();
  const usdPrice = await fetchUSDPrice();
  console.log(usdPrice);
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
