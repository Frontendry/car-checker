// Components
import ContentSectionCarSingleLeft from "./ContentSectionCarSingleLeft";
import ContentSectionCarSingleRight from "./ContentSectionCarSingleRight";

const ContentSectionCarSingle = () => {
  return (
    <div className="banner-bootom-w3-agileits py-5">
      <div className="container py-xl-4 py-lg-2">
        <div className="row">
          <ContentSectionCarSingleLeft />
          <ContentSectionCarSingleRight />
        </div>
      </div>
    </div>
  );
};

export default ContentSectionCarSingle;
