// Node Modules
import { useContext, useEffect } from "react";
import Image from "next/image";

// Context
import singleCarContext from "../../../context/singleCarContext";

// Interfaces
import { mediaElementType } from "../../../config/interfaces";

const RenderMedia = () => {
  const singleCarData = useContext(singleCarContext);

  const carMedia = singleCarData?.singleCarMediaData?.carMediaList;

  return (
    <>
      {carMedia &&
        carMedia.map((mediaElement: mediaElementType) => (
          <li
            key={mediaElement.id}
            id={`media_${mediaElement.id}`}
            data-thumb={mediaElement.url}
          >
            <div className="thumb-image">
              <Image
                src={mediaElement.url}
                alt={mediaElement.name}
                width={256}
                height={192}
                className="img-fluid"
              />
            </div>
          </li>
        ))}
    </>
  );
};

const ContentSectionCarSingleLeft = () => {
  return (
    <div className="col-lg-5 col-md-8 single-right-left ">
      <div className="grid images_3_of_2">
        <div className="flexslider">
          <ul className="slides">
            <RenderMedia />
          </ul>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionCarSingleLeft;
