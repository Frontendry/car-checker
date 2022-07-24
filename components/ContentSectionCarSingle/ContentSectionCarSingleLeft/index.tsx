import useSWR from "swr";

// Config
import { SINGLE_CAR_MEDIA } from "../../../config/constant";
import axiosModules from "../../../config/axios";

const fetcher = async (url: string) => {
  const { axios } = axiosModules;
  const res = await axios.get(url);
  const media = await res.data;

  if (res.status !== 200) {
    throw new Error("Error on fetching data");
  }
  return media;
};

const ContentSectionCarSingleLeft = () => {
  return (
    <div className="col-lg-5 col-md-8 single-right-left ">
      <div className="grid images_3_of_2">
        <div className="flexslider">
          <ul className="slides">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionCarSingleLeft;
