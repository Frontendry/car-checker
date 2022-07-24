// Next and React Modules
import React, { createContext } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

// Config
import axiosModules from "../config/axios";
import { POPULAR_MAKES, CARS_LIST } from "../config/constant";

// Interfaces
import { BrandsAndCarsContextData } from "../config/interfaces";

// Context
import {
  BrandsAndCarsContextProvider,
  useBrandsAndCarsContextContext,
} from "../context/brandsAndCarsContext";

// Components
import TopSection from "../components/TopSection";
import LogoSearchSection from "../components/LogoSearchSection";
import ContentSection from "../components/ContentSection";

const Home = (props: BrandsAndCarsContextData) => {
  const { setBrandsAndCarsRes } = useBrandsAndCarsContextContext();

  setBrandsAndCarsRes(props);

  console.log(props);

  return (
    <div>
      <Head>
        <title>Car Checker</title>
        <meta name="description" content="Welcome to our website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopSection />

      <BrandsAndCarsContextProvider>
        <LogoSearchSection />
        <ContentSection />
      </BrandsAndCarsContextProvider>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { axios } = axiosModules;
  const endPoints = [`${POPULAR_MAKES}`, `${CARS_LIST}`];

  const [popularMakesRes, carsListRes] = await Promise.all(
    endPoints.map((endPoint: string) => axios.get(endPoint))
  );

  const [popularMakes, carsList] = await Promise.all([
    popularMakesRes.data,
    carsListRes.data,
  ]);

  return { props: { popularMakes, carsList } };
};
export default Home;

/* // Next and React Modules
import React, { createContext } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

// Config
import axiosModules from "../config/axios";
import { POPULAR_MAKES, CARS_LIST } from "../config/constant";

// Interfaces
import {
  PaginationDetails,
  CarDetails,
  BrandDetails,
} from "../config/interfaces";

// Components
import TopSection from "../components/TopSection";
import LogoSearchSection from "../components/LogoSearchSection";
import ContentSection from "../components/ContentSection";

// More Interfaces
interface Props {
  carsList: {
    result: CarDetails[];
    pagination: PaginationDetails;
  };
  popularMakes: {
    makeList: BrandDetails[];
    pagination: PaginationDetails;
  };
}

// Context
const brandsAndCarsContext = createContext<Props | null>(null);

const Home = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Car Checker</title>
        <meta name="description" content="Welcome to our website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopSection />

      <brandsAndCarsContext.Provider value={props}>
        <LogoSearchSection />
        <ContentSection />
      </brandsAndCarsContext.Provider>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { axios } = axiosModules;
  const endPoints = [`${POPULAR_MAKES}`, `${CARS_LIST}`];

  const [popularMakesRes, carsListRes] = await Promise.all(
    endPoints.map((endPoint: string) => axios.get(endPoint))
  );

  const [popularMakes, carsList] = await Promise.all([
    popularMakesRes.data,
    carsListRes.data,
  ]);

  return { props: { popularMakes, carsList } };
};

export default Home;
 */
