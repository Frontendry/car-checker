import { useRouter } from "next/router";
import useSWR from "swr";

import { INT_API_POPULAR_BRAND_CARS } from "../../config/constant";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const PopularMake = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.pid && `${INT_API_POPULAR_BRAND_CARS}/${query.pid}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);
  return <div>test</div>;
};

export default PopularMake;

/* 
// Not working

import { GetStaticProps, GetStaticPaths } from "next";

// Interfaces
import {
  CarDetails,
  CarExtraDetails,
  CarExtraDetailsProps,
  BrandDetails,
  popularMakeCarsProps,
} from "../../config/interfaces";

// Config
import axiosModules from "../../config/axios";
import { POPULAR_MAKES, CARS_LIST } from "../../config/constant";

// Axios Instance
const { axios } = axiosModules;

const PopularMake = (props: popularMakeCarsProps) => {
  console.log(props);
  return <div>{"test"}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`${POPULAR_MAKES}`);

  const popularBrandsList = await res.data.makeList;

  const paths = popularBrandsList.map((item: BrandDetails) => ({
    params: { name: item.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params!;
  const res = await axios.get(`${CARS_LIST}`);
  const carList = await res.data.result;
  console.log(name);

  const querySearch = carList.filter((car: CarDetails) =>
    car["title"]
      .toLowerCase()
      .includes(typeof name === "string" ? name.toLowerCase() : "")
  );

  console.log(querySearch);

  // Pass post data to the page via props
  return { props: { querySearch } };
};

export default PopularMake;
 */
