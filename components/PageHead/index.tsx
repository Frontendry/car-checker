import Head from "next/head";
import dynamic from "next/dynamic";

const EssentialScriptsComponent = dynamic(
  () => import("../essentialScripts/EssentialScripts"),
  { ssr: false }
);

const PageHead = () => {
  return (
    <>
      <Head>
        <title>Car Checker</title>
        <meta name="description" content="Welcome to our website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EssentialScriptsComponent />
    </>
  );
};

export default PageHead;
