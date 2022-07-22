// Next Modules
import type { NextPage } from "next";
import Head from "next/head";

// Components
import TopSection from "../components/TopSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Car Checker</title>
        <meta name="description" content="Welcome to our website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopSection />
    </div>
  );
};

export default Home;
