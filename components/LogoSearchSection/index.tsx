// Next Modules
import { useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Logo from "../../assets/images/logo2.png";

const LogoSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/popular-brands/${searchQuery}`);
  };

  return (
    <div className="header-bot">
      <div className="container">
        <div className="row align-items-center header-bot_inner_wthreeinfo_header_mid">
          <div className="col-md-3 logo_agile">
            <h1 className="text-center">
              <Link href="/">
                <a className="font-weight-bold font-italic d-flex align-items-center">
                  <Image
                    src={Logo}
                    alt="Car Checker Store"
                    width={90}
                    height={87}
                    className="position-relative"
                  />
                  Car Store
                </a>
              </Link>
            </h1>
          </div>

          <div className="col-md-9 header mt-4 mb-md-0 mb-4">
            <div className="row">
              <div className="col-10 agileits_search ml-auto">
                <form
                  className="form-inline"
                  action="#"
                  method="post"
                  onSubmit={(e) => {
                    handleSearch(e);
                  }}
                >
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Brand Name"
                    required
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSearchSection;
