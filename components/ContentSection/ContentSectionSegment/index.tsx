// Node Modules
import Image from "next/image";
import Link from "next/link";

// Interfaces
import { ContentSegmentProps } from "../../../config/interfaces";

const ContentSectionSegment = ({ segmentTitle, data }: ContentSegmentProps) => {
  const makeListKeyChecker = data !== undefined && "makeList" in data;

  return (
    <>
      <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
        <h3 className="heading-tittle text-center font-italic">
          {segmentTitle}
        </h3>

        <div className="row">
          {makeListKeyChecker
            ? data.makeList &&
              data.makeList.map((item) => (
                <div
                  className="col-md-4 product-men mt-5"
                  key={item.id}
                  id={`brand_${item.id}`}
                >
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item text-center">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={150}
                        height={150}
                      />

                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link
                            href={`/popular-brands/${encodeURIComponent(
                              item.name
                            )}`}
                          >
                            <a className="link-product-add-cart">Quick View</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product text-center border-top mt-4">
                      <h4 className="pt-1">
                        <Link
                          href={`/popular-brands/${encodeURIComponent(
                            item.name
                          )}`}
                        >
                          {item.name}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))
            : data !== undefined &&
              data.result &&
              data.result.map((item) => (
                <div
                  className="col-md-4 product-men mt-5"
                  key={item.id}
                  id={`vehicle_${item.id}`}
                >
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item text-center">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={256}
                        height={192}
                      />

                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link href={`/cars/${encodeURIComponent(item.id)}`}>
                            <a className="link-product-add-cart">Quick View</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product text-center border-top mt-4">
                      <h4 className="pt-1">
                        <Link href={`/cars/${encodeURIComponent(item.id)}`}>
                          {item.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default ContentSectionSegment;
