import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import CountryDropdown from "../CountryDropdown";
import { AiOutlineUser, IoBagOutline } from "../../assets/icons";
import { Button } from "@mui/material";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../routes/App";

const Header = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19</b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                {context.countryList.length !== 0 && <CountryDropdown />}

                {/* search section start*/}
                <SearchBox />
                {/* search section end*/}

                {/* my Account Strat part3 */}
                <div className="part3 d-flex align-items-center ml-auto">
                  {context.isLogin !== true ? (
                    <Link to="/signIn">
                      <Button className="btn-blue btn-lg btn-big btn-round mr-3">
                        Sign In
                      </Button>
                    </Link>
                  ) : (
                    <Button className="circle mr-3">
                      <AiOutlineUser />
                    </Button>
                  )}

                  {/* <Button className="circle mr-3">
                    <AiOutlineUser />
                  </Button> */}
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">
                      <Link to={"/cart"}>
                        <Button className="circle ">
                          <IoBagOutline />
                        </Button>
                        <span className="count d-flex align-items-center justify-content-center">
                          1
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* my Account End part3 */}
              </div>
            </div>
          </div>
        </header>

        {/* Nav Start */}
        <Navigation />
        {/* Nav End */}
      </div>
    </>
  );
};

export default Header;
