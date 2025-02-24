import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../../components/ProductItem";

const RelatedProducts = (props) => {
  return (
    <>
      <div className="d-flex align-items-center mt-3">
        <div className="info w-75">
          <h3 className="mb-0 hd">{props.title}</h3>
        </div>
      </div>

      <div className="producy_row w-100 mt-4">
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* 1 */}
          <SwiperSlide className="ml-1 mr-1">
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
    </>
  );
};

export default RelatedProducts;
