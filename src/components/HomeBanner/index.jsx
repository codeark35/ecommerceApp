
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../slick/slick-custom";

const HomeBanner = () => {
  var settings = {
       dots: false,
       infinite: true,
       speed: 3000,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       nextArrow: <NextArrow />, // Flecha personalizada
       prevArrow: <PrevArrow />,
       autoplaySpeed: 8000,
       pauseOnHover: true,
       responsive: [{}],
  };

  return (
    <>
      <div className="container mt-3">
        <div className="homeBannerSection">
          <Slider {...settings}>
            <div className="item">
              <img
                src="https://sslimages.shoppersstop.com/sys-master/root/h98/h92/32004480991262/And-Forever-New-web_901.jpg"
                alt=""
                className="w-100"
              />
            </div>
            <div className="item">
              <img
                src="https://sslimages.shoppersstop.com/sys-master/root/h98/h92/32015952117790/web_3093.jpg"
                alt=""
                className="w-100"
              />
            </div>

            <div className="item">
              <img
                src="https://sslimages.shoppersstop.com/sys-master/root/hdd/h44/32004481122334/titan%2C-casio-web_31.jpg"
                alt=""
                className="w-100"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
