// React Modules
import { useContext } from "react";

// Context
import brandsAndCarsContext from "../../context/brandsAndCarsContext";

// Components
import ContentSectionSegment from "./ContentSectionSegment";
import ContentSectionTitle from "./ContentSectionTitle";

const ContentSection = () => {
  const brandsAndCarsContextData = useContext(brandsAndCarsContext);

  const popularMakesData = brandsAndCarsContextData?.popularMakes;
  const carListData = brandsAndCarsContextData?.carsList;

  return (
    <div className="ads-grid py-sm-5 py-4">
      <div className="container py-xl-4 py-lg-2">
        <ContentSectionTitle />

        <div className="row">
          <div className="agileinfo-ads-display col-lg-9">
            <div className="wrapper">
              <ContentSectionSegment
                data={popularMakesData}
                segmentTitle="Popular Car Brands"
              />

              <ContentSectionSegment
                data={carListData}
                segmentTitle="Cars for Sale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
