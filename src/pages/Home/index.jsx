
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Button } from "@mui/material";
import { HiOutlineArrowNarrowRight, IoMailOutline } from "../../assets/icons";
import ProductItem from "../../components/ProductItem";
import HomeBanner from "../../components/HomeBanner";
import {
  HomeBanner1,
  HomeBanner2,
  HomeOffer,
  HomeOfferOne,
  newsLetterCuopon,
} from "../../assets";
import HomeCategory from "../../components/HomeCategory";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCategory />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={HomeOffer} alt="" className="cursor w-100" />
                </div>

                <div className="banner mt-4">
                  <img src={HomeOfferOne} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Best Seller</h3>
                  <p className="text-ligth text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  View All
                  <HiOutlineArrowNarrowRight />
                </Button>
              </div>

              <div className="producy_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {/* 1 */}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  {/* 2 */}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  {/* 3 */}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  {/* 4 */}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  {/* 5 */}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  {/* 6 */}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  {/* 7 */}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  {/* 8 */}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* 2 */}
              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-ligth text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  View All
                  <HiOutlineArrowNarrowRight />
                </Button>
              </div>

              <div className="producy_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src={HomeBanner1} alt="" className="cursor w-100" />
                </div>

                <div className="banner">
                  <img src={HomeBanner2} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates <br /> on
                promotions and coupons.
              </p>

              <form>
                <IoMailOutline />
                <input type="text" placeholder="Your email address" />
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={newsLetterCuopon} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
