import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

// Interfaces
import {
  CarDetails,
  CarExtraDetails,
  CarExtraDetailsProps,
} from "../../config/interfaces";

// Config
import axiosModules from "../../config/axios";
import { CARS_LIST, SINGLE_CAR } from "../../config/constant";

// Components
import TopSection from "../../components/TopSection";
import LogoSearchSection from "../../components/LogoSearchSection";
import ContentSectionCarSingle from "../../components/ContentSectionCarSingle";

// Axios Instance
const { axios } = axiosModules;

const CarPost = (props: CarExtraDetailsProps) => {
  const carDetailsData = props.carDetails;
  return (
    <div>
      <Head>
        <title>Car Checker</title>
        <meta name="description" content="Welcome to our website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopSection />
      <LogoSearchSection />
      <ContentSectionCarSingle />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`${CARS_LIST}`);
  const carslist = await res.data.result;

  const paths = carslist.map((item: CarDetails) => ({
    params: { pid: item.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { pid } = context.params!;
  const res = await axios.get(`${SINGLE_CAR}/${pid}`);
  const carDetails = (await res.data) as CarExtraDetails;

  // Pass post data to the page via props
  return { props: { carDetails } };
};

export default CarPost;
