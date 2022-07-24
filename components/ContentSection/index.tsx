import ContentSectionSegment from "./ContentSectionSegment";
import ContentSectionTitle from "./ContentSectionTitle";

const ContentSection = () => {
  return (
    <div className="ads-grid py-sm-5 py-4">
      <div className="container py-xl-4 py-lg-2">
        <ContentSectionTitle />

        <div className="row">
          <div className="agileinfo-ads-display col-lg-9">
            <div className="wrapper">
              <ContentSectionSegment segmentTitle="Popular Car Brands" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
