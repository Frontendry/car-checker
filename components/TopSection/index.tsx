const TopSection = () => {
  return (
    <div className="agile-main-top">
      <div className="container-fluid">
        <div className="row main-top-w3l py-2">
          <div className="col-lg-4 header-most-top">
            <p className="text-white text-lg-left text-center">
              Top Deals & Discounts on Our Vehicles
            </p>
          </div>
          <div className="col-lg-8 header-right mt-lg-0 mt-2 d-flex">
            <ul className="ml-auto d-flex align-items-center">
              <li className="text-center border-right pr-2 mr-3">
                <a
                  href="tel:+254 700 000 020"
                  className="text-white d-flex align-items-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  <span>+254 700 000 020</span>
                </a>
              </li>
              <li className="text-center">
                <a
                  href="mailto:info@carchecker.co.ke"
                  className="text-white d-flex align-items-center"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  <span>info@carchecker.co.ke</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
