// Node Modules
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import brandsContext from "../../../context/brandsContext";

const NoVehicles = () => {
  return (
    <div className="text-center w-100">
      <h4>
        No cars availabe for this brand. <Link href="/">Go Back</Link>
      </h4>
    </div>
  );
};

const ContentSectionSegment = () => {
  const relatedVehiclesData = useContext(brandsContext);

  return (
    <>
      <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
        <div className="row">
          {relatedVehiclesData && relatedVehiclesData.length ? (
            relatedVehiclesData.map((carItem) => (
              <div
                className="col-md-4 product-men mt-5"
                key={carItem.id}
                id={`vehicle_${carItem.id}`}
              >
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item text-center">
                    <Image
                      src={carItem.imageUrl}
                      alt={carItem.title}
                      width={256}
                      height={192}
                    />

                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link href={`/cars/${encodeURIComponent(carItem.id)}`}>
                          <a className="link-product-add-cart">Quick View</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item-info-product text-center border-top mt-4">
                    <h4 className="pt-1">
                      <Link href={`/cars/${encodeURIComponent(carItem.id)}`}>
                        {carItem.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <NoVehicles />
          )}
        </div>
      </div>
    </>
  );
};

export default ContentSectionSegment;
