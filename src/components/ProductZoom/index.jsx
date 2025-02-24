import { useRef } from "react";
import { ProductImg1, ProductImg11, ProductImg12 } from "../../assets";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductZoom = () => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const settings2 = {
    dots: false,
    infinite: false, // Corrected
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <>
      <div className="productZoom">
        <div className="productZoom position-relative">
          <div className="badge badge-primary">23%</div>
          <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                className="InnerImageZoom"
                src={ProductImg1}
              />
            </div>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                className="InnerImageZoom"
                src={ProductImg11}
              />
            </div>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                className="InnerImageZoom"
                src={ProductImg12}
              />
            </div>
          </Slider>
        </div>

        <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
          <div className="item">
            <img
              src={ProductImg1}
              className="w-100"
              alt="Product Image"
              onClick={() => goto(0)}
            />
          </div>
          <div className="item">
            <img
              src={ProductImg11}
              className="w-100"
              alt="Product Image"
              onClick={() => goto(1)}
            />
          </div>
          <div className="item">
            <img
              src={ProductImg12}
              className="w-100"
              alt="Product Image"
              onClick={() => goto(2)}
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ProductZoom;
