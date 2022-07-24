// Node Modules
import Image from "next/future/image";

// Interfaces
import { ContentSegmentProps } from "../../../config/interfaces";

const ContentSectionSegment = ({ segmentTitle, data }: ContentSegmentProps) => {
  return (
    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
      <h3 className="heading-tittle text-center font-italic">{segmentTitle}</h3>
      <div className="row">
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
      </div>
    </div>
  );
};

export default ContentSectionSegment;