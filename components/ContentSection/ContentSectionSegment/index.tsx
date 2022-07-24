// Node Modules
import Image from "next/image";

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
          {makeListKeyChecker ? (
            data.makeList &&
            data.makeList.map((item) => (
              <div className="col-md-4 product-men mt-5" key={item.id}>
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
                        <a href="single.html" className="link-product-add-cart">
                          Quick View
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item-info-product text-center border-top mt-4">
                    <h4 className="pt-1">
                      <a href="#">{item.name}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-md-4 product-men mt-5">
              <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                  {/* <img src="images/m1.jpg" alt=""> */}
                  <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                      <a href="single.html" className="link-product-add-cart">
                        Quick View
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item-info-product text-center border-top mt-4">
                  <h4 className="pt-1">
                    <a href="#">Samsung Galaxy J7</a>
                  </h4>
                  <div className="info-product-price my-2">
                    <span className="item_price">$200.00</span>
                    <del>$280.00</del>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentSectionSegment;
