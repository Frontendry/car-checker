import { useRouter } from "next/router";
import useSWR from "swr";

// Interfaces
import { BrandsContextDataType } from "../../config/types";

// Config
import { INT_API_POPULAR_BRAND_CARS } from "../../config/constant";

// Context
import brandsContext from "../../context/brandsContext";

// Components
import PageHead from "../../components/PageHead";
import TopSection from "../../components/TopSection";
import LogoSearchSection from "../../components/LogoSearchSection";
import ContentSectionPopularSingle from "../../components/ContentSectionPopularSingle";
import Footer from "../../components/Footer";

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

  const carsList: BrandsContextDataType = data;

  return (
    <div>
      <PageHead />
      <TopSection />
      <brandsContext.Provider value={carsList}>
        <LogoSearchSection />
        <ContentSectionPopularSingle />
      </brandsContext.Provider>

      <Footer />
    </div>
  );
};

export default PopularMake;
