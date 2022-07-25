import { GetStaticProps, GetStaticPaths } from "next";

// Interfaces
import { CarDetails, CarExtraDetailsProps } from "../../config/interfaces";

// Config
import axiosModules from "../../config/axios";
import { SINGLE_CAR, SINGLE_CAR_MEDIA, CARS_LIST } from "../../config/constant";

// Context
import singleCarContext from "../../context/singleCarContext";

// Components
import TopSection from "../../components/TopSection";
import LogoSearchSection from "../../components/LogoSearchSection";
import ContentSectionCarSingle from "../../components/ContentSectionCarSingle";
import PageHead from "../../components/PageHead";

// Axios Instance
const { axios } = axiosModules;

const CarPost = (props: CarExtraDetailsProps) => {
  const carPostDetails: CarExtraDetailsProps = props;
  return (
    <div>
      <PageHead />
      <TopSection />

      <singleCarContext.Provider value={carPostDetails}>
        <LogoSearchSection />
        <ContentSectionCarSingle />
      </singleCarContext.Provider>
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

  const endPoints = [`${SINGLE_CAR}/${pid}`, `${SINGLE_CAR_MEDIA}${pid}`];

  const [singleCarRes, singleCarMediaRes] = await Promise.all(
    endPoints.map((endPoint: string) => axios.get(endPoint))
  );

  const [singleCarData, singleCarMediaData] = await Promise.all([
    singleCarRes.data,
    singleCarMediaRes.data,
  ]);

  // Pass post data to the page via props

  return { props: { singleCarData, singleCarMediaData } };
};

export default CarPost;
